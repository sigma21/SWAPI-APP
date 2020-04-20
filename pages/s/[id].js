// import Layout from '../../components/app/Layout';
// import fetch from 'node-fetch'
// import Heading from '../../components/Heading'


// export default function Show({ show }) {

//     return (
//         <Layout>
//             <Heading/>
//             <h1>{show.name}</h1>
//             <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//             {show.image ? <img src={show.image.medium} /> : null}
//         </Layout>
        
//     );
// }


// export async function getServerSideProps(context) {
//     const {id} = context.query
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();

//     console.log(`fetched show: ${show.name}`)

//     return { props: {show} };
// }

// // export async function getStaticPaths() {

// //     const res = await fetch(`https://api.tvmaze.com/shows?q=batman`);
// //     const shows = await res.json();

// //     const paths = shows.map(show => ({
// //         params: { id: toString(show.id) }
// //     }))

// //     return { paths, fallback: false }
// // }