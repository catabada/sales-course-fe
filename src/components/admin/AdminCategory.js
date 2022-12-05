import {List, Datagrid, TextField} from "react-admin";

export function AdminCategory(props) {
    return <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="revenue"/>
        </Datagrid>
    </List>
}
