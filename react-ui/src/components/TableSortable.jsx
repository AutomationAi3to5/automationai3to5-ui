// react-ui/src/demos/TableDemo.jsx
import TableSortable from '../components/TableSortable';

const data = [
  { id: 1, name: 'Alice', status: 'Active', date: '2025-01-15' },
  { id: 2, name: 'Bob', status: 'Inactive', date: '2025-02-20' },
];

export default function TableDemo() {
  return <TableSortable data={data} />;
}

