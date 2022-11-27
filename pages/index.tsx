import { MenuBarSection, Window } from "./components/window";
import { NumberSlider } from "./components/slider";
import { Text } from "./components/text";
import { Checkbox } from "./components/checkbox";
import { Button } from "./components/button";
import { Row } from "./components/layout";

const DebugWindow = () => {
  return (
    <Window title="Debug" initialPosition={{
      x: 70,
      y: 50,
    }}>
      <Text>Hello, world!</Text>
      {/*<NumberSlider max={ 1.0 } min={ 0.0 } isFloat={ true } initialValue={ 0.0 }/>*/ }
      {/*<NumberSlider max={ 1.0 } min={ 0.0 } isFloat={ true } initialValue={ 0.0 }/>*/ }
      <Checkbox label="Demo Window"/>
      <Checkbox label="Another Window"/>
      <Row>
        <Button>Button</Button>
        <Text>counter = 0</Text>
      </Row>
      <Text>Application average 16.666 ms/frame (60.0 FPS)</Text>
    </Window>
  )
}

export const DearImGuiWindow = () => {
  const menubar: Array<MenuBarSection> = [
    {
      name: 'Menu',
      items: []
    },
    {
      name: 'Examples',
      items: []
    },
    {
      name: 'Tools',
      items: []
    }
  ];

  return <Window title="Dear ImGui Demo" menubar={menubar} initialPosition={{
    x: 400,
    y: 30,
  }}>

  </Window>;
}

export const Index = () => {
  return <div>
    <DebugWindow />
    <DearImGuiWindow />
  </div>
}

export default Index;
