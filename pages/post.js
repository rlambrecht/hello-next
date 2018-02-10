import Layout from "../components/MyLayout";

// takes in the url query for title when at /post
const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

// The url prop is only expose to the default component
export default props => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
