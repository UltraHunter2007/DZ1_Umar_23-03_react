import Button from './components/Button/Button';
import Text from './components/Text/Text';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CenterComponent from './components/CenterComponent/CenterComponent';

const App = () => {
  const navigationItems = ['Home', 'About', 'Contact'];
  const centerContent = 'This is the center content.';
  const textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur delectus dolor dolore dolorem doloribus itaque magnam mollitia nesciunt nostrum omnis perferendis porro praesentium quasi quidem quos sint, unde velit!'

  return (
      <div>
        <Header navigationItems={navigationItems} />
          <Button label={'Click me'}/>
          <Text content = {textContent}/>
        <CenterComponent content={centerContent} />
        <Footer />
      </div>
  );
};

export default App;

