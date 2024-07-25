import { Button } from '../../components/antd'

export const columns = (handleDetail) => [
  {
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
    title: 'Product ID',
    width: 100,
  },
  {
    dataIndex: 'title',
    ellipsis: true,
    key: 'title',
    sorter: (a, b) => a.title.localeCompare(b.title),
    title: 'Title',
    width: 100,
  },
  {
    dataIndex: 'brand',
    key: 'brand',
    sorter: (a, b) => a.brand.localeCompare(b.brand),
    title: 'Brand',
    width: 100,
  },
  {
    dataIndex: 'action',
    key: 'action',
    title: 'Action',
    width: 100,
    render: (text, record) => (
      <Button
        type='primary'
        onClick={() => handleDetail(record.id)}
      >
        View
      </Button>
    ),
  },
]
