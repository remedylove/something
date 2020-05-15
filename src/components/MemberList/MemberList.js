import React from 'react';
import { employees } from '../../store';
import { Container, Grid } from '@material-ui/core';
import Member from '../../components/Member/Member';

function MemberList() {
    return (
        <Container>
            <Grid container justify="center">
            {employees.map(employee => (
                <Member key={employee.id} employee={employee} />
            ))}
            </Grid>
        </Container>
    )
}

export default MemberList
