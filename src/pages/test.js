import React from "react"

import "antd/dist/antd.css"
import { Popover } from "@mantine/core"
import { Button } from "antd"
import { PrimaryButton } from "../components/UI/Buttons/ButtonTemplate"

export default function Test() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  return (
    <div style={{ height: 200 }}>
      Panashe
      <PrimaryButton>POP1</PrimaryButton>
      <Popover content={content} trigger="click" title="Title">
        <PrimaryButton>POP1</PrimaryButton>
      </Popover>
      <div style={{ height: 200 }}></div>
      {/* <Popover content={content}>
    <PrimaryButton>OPO2</PrimaryButton>
   
</Popover> */}
    </div>
  )
}
