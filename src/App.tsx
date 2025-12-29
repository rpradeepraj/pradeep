import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
// import Apps from './components/sections/Apps';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import GitHubOverview from './components/sections/GitHubOverview';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      {/* <Apps /> */}
      <Experience />
      <Skills />
      <GitHubOverview />
    </Layout>
  );
}

export default App;
