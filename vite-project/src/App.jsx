import {data} from './lab1/module-data';
import CarProfile from './lab2/components/carProfile';
import './App.css'

// function App() {
//   return (
    // <div className="App">
    //   {data.map((car, index) => (
    //     <CarProfile key={index} {...car} />
    //   ))}
    // </div>
    
function App() {
  const menuItems = [
    {
      id: 1,
      label: 'Home',
      url: '/',
      urlPattern: '/',
      element: <Home />,
    },
    {
      id: 2,
      label: 'About',
      url: '/about',
      urlPattern: '/about',
      element: <About />,
    },
    {
      id: 3,
      label: 'Contact',
      url: '/contact',
      urlPattern: '/contact',
      element: <Contact />,
    },
  ];

  return (
    <Router>
      <RootLayout>
        <Routes>
          {menuItems.map(item => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App