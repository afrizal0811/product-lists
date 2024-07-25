import { Dropdown } from 'antd'
import React from 'react'

const AntdDropdown = (props) => {
  const { placement, className, icon, items, trigger } = props
  return (
    <Dropdown
      className={className}
      menu={{
        items,
      }}
      placement={placement}
      trigger={trigger}
    >
      {icon}
    </Dropdown>
  )
}

export default AntdDropdown
