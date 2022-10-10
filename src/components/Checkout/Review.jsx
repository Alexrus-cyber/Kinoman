import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => (
    <>
        <Typography variant="h6" gutterBottom>Order summary</Typography>
        <List disablePadding>

                <ListItem style={{ padding: '10px 0' }} >
                    <ListItemText />
                    <Typography variant="body2"></Typography>
                </ListItem>
            <ListItem style={{ padding: '10px 0' }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                </Typography>
            </ListItem>
        </List>
    </>
);

export default Review;