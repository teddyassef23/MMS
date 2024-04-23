const { Member } = require('../models');
const User = require('../models/User')

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getMember: async (parent, { memberId }) => {
      try {
        return await Member.findById(memberId);
      } catch (error) {
        console.error('Error fetching member:', error);
        throw new Error('Failed to fetch member.');
      }
    },
    getAllMembers: async () => {
      try {
        return await Member.find();
      } catch (error) {
        console.error('Error fetching members:', error);
        throw new Error('Failed to fetch members.');
      }
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken({ username, email, _id: user._id });
        return { token, user };
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user.');
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Invalid email or password!');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Invalid email or password!');
      }

      const token = signToken({ email: user.email, _id: user._id });
      return { token, user };
    },
    addMember: async (parent, { memberInput }) => {
      try {
        const { payment, ...rest } = memberInput;
        const newMember = await Member.create(rest);
        
        if (payment) {
          newMember.payment = payment;
          await newMember.save();
        }
    
        return newMember;
      } catch (error) {
        console.log('Error creating member:', error);
        throw new Error('Failed to create member.');
      }
    },
    
    
    updateMember: async (parent, { memberId, memberInput }) => {
      try {
        return await Member.findByIdAndUpdate(memberId, memberInput, { new: true });
      } catch (error) {
        console.error('Error updating member:', error);
        throw new Error('Failed to update member.');
      }
    },
    deleteMember: async (parent, { memberId }) => {
      try {
        return await Member.findByIdAndDelete(memberId);
      } catch (error) {
        console.error('Error deleting member:', error);
        throw new Error('Failed to delete member.');
      }
    },
  },

};

module.exports = resolvers;