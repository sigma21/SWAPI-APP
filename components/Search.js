import React, { useState } from 'react';
import { Container, Card, Icon, Image, Header, Search } from 'semantic-ui-react'
import fetch from 'node-fetch';
import Head from 'next/head'
import CharacterModal from './CharacterModal';

const SearchBar = ({...movies}) => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const fetchResults = async (query) => {
    const searchUrl = `https://swapi.dev/api/people/?search=${query}`
    setResults(null)
    if (query.length < 3) {
      setMessage('Please type at least 3 characters.')
    } else {
      try {
        // setIsDisabled(false)
        setLoading(true)
        const res = await fetch(searchUrl);
        const data = await res.json();
        if (data.results.length) {
          setResults(data.results)
        };
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleChange = e => {
    // while (e.target.value.length < 3) {
    // setIsDisabled(true)
    // }
    setLoading(true)
    setQuery(e.target.value)
  };
  const handleSearch = () => fetchResults(query);

  return (
    <Container className='container'>
      {/* <Head>
        <title>May The Force Be With You</title>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head> */}
      <Container textAlign='center'>
        <Header as='h2' icon textAlign='center'>
          {/* <Icon name='inverted users' circular /> */}
          {/* <Header.Content>Star Wars Character Search</Header.Content> */}
        </Header>
        {/* <Search
            loading={loading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
              // leading: true,
            // })}
            results={results}
            value={query}
            onSearchChange={e=>handleChange(e)}
            // {...this.props}
          /> */}
        <input className='searchBar' type="text" value={query} id="search" placeholder='search for a character' onChange={e => handleChange(e)} />
        <button className='searchBtn' type='submit' onClick={() => handleSearch()} disabled={isDisabled}><Icon name='search'/></button>
      </Container>

      <Container className='results'>
        {results ?
          (<Card.Group itemsPerRow='3' stackable={true} centered={true} textAlign='center'>
            {results.map(i =>
              <CharacterModal {...movies} name={i.name} birth_year={i.birth_year} homeworld={i.homeworld} films={i.films} />)}
          </Card.Group>)
          :
          ('')
        }
      </Container>
      <style global jsx>
        {`
          body {
              width: 90%;
              max-width: 900px;
              margin: 30px auto;
              text-align: center;
              background-color: #A60000C7;
          }

          .results {
            margin: 30px auto;
          }

          .searchBar {
            width: 30%;
            height: 42.5px;
            line-height: 30px;
            font-size: 1em;
            border-radius: 20px;
            padding: 0 20px;
            border:none;
          }

          .searchBtn {
            width: 5%;
            margin-left:-45px;
            height: 42.5px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </Container>

  )
};


export default SearchBar;