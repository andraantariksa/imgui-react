import { Draggable, Window } from "./components/Window";
import { NumberSlider } from "./components/Slider";

export default function Index() {
  return (
    <div style={ { backgroundColor: '#738c99', width: '100%', height: '100vh' } }>
      <Window title="Debug">
          <NumberSlider max={ 1.0 } min={ 0.0 } isFloat={ true } initialValue={0.0} />
          <p>float</p>
      </Window>
    </div>
  )
}
