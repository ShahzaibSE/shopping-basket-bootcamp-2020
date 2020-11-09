import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {indigo} from "@material-ui/core/colors";

export const headerStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const badgeStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            },
        },
        shape: {
            backgroundColor: theme.palette.primary.main,
            width: 40,
            height: 40,
        },
        shapeCircle: {
            borderRadius: '50%',
        },
    }),
);

export const swipeableDrawerStyles = makeStyles({
    list: {
      width: 250,
      backgroundColor:indigo[500]
    },
    fullList: {
      width: 'auto',
    },
    drawer_paper: {
        backgroundColor:indigo[500]
    }
});

export const listStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });