import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui/Table';
import LinkInterface from '../interfaces/link';

const LinksTable = (props) => {
    const links = props.links.map(function (link) {
        return (
            <TableRow className="delButt" key={link.id}>
                <TableCell>{link.longLink}</TableCell>
                <TableCell className="shLink"> <Link to={`/${link.shortLink}`} >{link.shortLink}</Link></TableCell>
                <TableCell className="delButt" ><button   onClick={() => {props.callback(link.id)}}>Delete</button></TableCell>
            </TableRow>
        );
    });

    return (
            <Grid className="linksTable" container>
                <Grid item xs={12} md={8}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>LONGLINK</TableCell>
                                <TableCell className="shLink">SHORTLINK</TableCell>
                                <TableCell ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {links}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
    );
};


LinksTable.propTypes = {
    links: PropTypes.arrayOf(LinkInterface)
};


export default LinksTable;
