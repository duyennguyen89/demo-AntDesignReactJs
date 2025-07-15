import 'antd/dist/reset.css'; // Đúng cho Ant Design v5
import './App.css';
// import SelectOption from './component/ExampleComponent/SelectOption';
// import FormLogin from './component/ExampleComponent/FormLogin';
// import DividerTypograp from './component/ExampleComponent/Divider';
// import VericalMenu from './component/ExampleComponent/VericalMenu';
import AppHeader from './component/Header';
import PageContent from './component/PageContent';
import AppFooter from './component/Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [cartCount, setCartCount] = React.useState(0);
  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };
  return (
    // <div style={{ padding: 24 }}>
    //   <SelectOption />
    //   <div className='form__login'>
    //       <FormLogin />
    //   </div>
    //   <DividerTypograp />
    //   <VericalMenu />
    // </div>
    <div>
      <BrowserRouter>
        <AppHeader cartCount={cartCount}/>
        <PageContent onAddToCart={handleAddToCart} />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
