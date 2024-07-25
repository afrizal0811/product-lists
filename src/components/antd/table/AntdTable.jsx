import { Table } from 'antd'
import React from 'react'
const AntdTable = (props) => {
  const { columns, data, pagination, className, isCheck } = props
  return (
    <Table
      rowSelection={
        isCheck && {
          type: 'checkbox',
        }
      }
      className={className}
      columns={columns}
      dataSource={data}
      pagination={pagination}
    />
  )
}

export default AntdTable
