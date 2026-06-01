import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { PokemonPage } from "./03-examples/PokemonPage";
import "./index.css";
import { TasksApp } from "./05-useReduce/TaskApp";
import App from "./00-WebDebSimplified/useReducerExample";
import { ScrambleWords } from "./05-useReduce/ScrambleWords";
import { ScrambleWordsReducer } from "./05-useReduce/ScrambleWordsReducer";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightsWithEffect";
// import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightsWithEffectWithHook";
// import { TrafficLight } from "./01-useState/TrafficLights";
// import { HookApp } from "./HookApp";
// import { TrafficLight } from "./01-useState/TrafficLights";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightsWithEffect";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HookApp />*/}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <App /> */}
    {/* <ScrambleWords /> */}
    <ScrambleWordsReducer />
  </StrictMode>,
);
