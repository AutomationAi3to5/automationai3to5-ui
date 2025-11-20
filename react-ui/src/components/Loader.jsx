// react-ui/src/demos/LoaderDemo.jsx
import Loader from '../components/Loader';

export default function LoaderDemo() {
  return (
    <div className="p-8">
      <h1>Loader Component</h1>
      <Loader size="small" />
      <Loader size="medium" />
      <Loader size="large" />
    </div>
  );
}

