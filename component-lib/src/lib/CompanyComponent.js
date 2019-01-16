import React from "react";
import styled from 'styled-components'

const Company = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default ({id, ceo, employeeCount}) => (
    <Company>
        <div>Company ID: {id}</div>
        <div>CEO: {ceo}</div>
        <div>Num of Employees: {employeeCount}</div>
    </Company>
)
