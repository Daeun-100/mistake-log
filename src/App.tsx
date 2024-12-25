import LogItem from './components/LogItem';

const App: React.FC = () => (
  <>
    <LogItem
      title="tsconfig type-props 관련 에러"
      timestamp={new Date().toLocaleString()}
      category={['config', 'build', 'typescript']}
      favorite={true}
    />
    <LogItem
      title="tsconfig type-props 관련 에러"
      timestamp={new Date().toLocaleString()}
      category={['config', 'build', 'typescript']}
      favorite={false}
    />
    <LogItem
      title="tsconfig type-props 관련 에러"
      timestamp={new Date().toLocaleString()}
      category={['config', 'build', 'typescript']}
      favorite={true}
    />
  </>
);

export default App;
