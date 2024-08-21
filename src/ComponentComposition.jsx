function Header() {
    return <header>Header content</header>;
  }
  
  function Content() {
    return <main>Main content</main>;
  }
  
  function Footer() {
    return <footer>Footer content</footer>;
  }
  
export function Page() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
  