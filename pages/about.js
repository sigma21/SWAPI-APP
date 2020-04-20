import Head from 'next/head'
import Layout from '../components/app/Layout';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import React from 'react'



export default function About() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      <Modal trigger={<Button>Show Modal</Button>} centered={false}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
        </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>

  );
}
