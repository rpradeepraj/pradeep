import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import GitHubOverview from './components/sections/GitHubOverview';
import Skills from './components/sections/Skills';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <GitHubOverview />
      <Skills />
    </Layout>
  );
}

export default App;
