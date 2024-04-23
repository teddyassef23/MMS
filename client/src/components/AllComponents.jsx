import { AutoComplete, InputGroup } from 'rsuite';



const styles = {
  width: 300,
  marginBottom: 10
};

const data = [
  'Eugenia',
  'Bryan',
  'Linda',
  'Nancy',
  'Lloyd',
  'Alice',
  'Julia',
  'Albert',
  'Louisa',
  'Lester',
  'Lola',
  'Lydia',
  'Hal',
  'Hannah',
  'Harriet',
  'Hattie',
  'Hazel',
  'Hilda'
];

const Search = () => (
  <>
    <InputGroup style={styles}>
      <AutoComplete data={data} />
      <InputGroup.Button tabIndex={-1}>
        {/* <SearchIcon /> */}
      </InputGroup.Button>
   </InputGroup>
  </>
);

export default Search;