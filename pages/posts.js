import Layout from '../components/app/Layout'
import Link from 'next/link'

const PostLink = props => (
    <li>
        {/* <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link> */}
        <Link href='/p/[id]' as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog Posts</h1>
            <ul>
                {/* <PostLink title='Hello Next.js' /> */}
                <PostLink id='Hello Next.js' />
                <PostLink id='Next.js Tutorial' />
                <PostLink id='Next.js Deployment with Zeit' />
            </ul>
            <style jsx>{`
            h1,
            a {
                font-family: 'Arial';
            }
            ul {
                padding:0;
            }
            li {
                list-style: none;
                margin: 5px 0;
            }
            a{
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: 0.6;
            }
            `}
            </style>
        </Layout>
    );
}