import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'all', label: 'Всі працівники' },
    { name: 'rise', label: 'На підвищення' },
    { name: 'moreThen1000', label: 'З/П більше 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        type='button'
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default AppFilter;
