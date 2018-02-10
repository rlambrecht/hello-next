import Layout from "../components/MyLayout";

const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

// This is the same as putting the Layout in the JSX div
export default () => <Layout page={Index} />;
