import { useWindowResize } from ".";

export const UseWindowResizeTest = () => {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>USe Window Resize Hook Test</h1>
      <p>Width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
};
