import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

//const cards = [1, 2, 3];

const theme = createTheme();

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Gender Equality for Companies</Typography>
      </div>
      <div className={classes.content}>
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={8}>
            <Grid item xs={4}> 
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                     image="data:image/jpeg;base64,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"
                    alt="random"
                  />
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
                </Grid>

                <Grid item xs={4}> 
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAYFBMVEX///+H4aGA4JyD4J5935qQ46j2/fju+/HH8NL7/vyJ4qO37Mbk+OnM8db4/fm+7suc5rHS89vX9N+y68Lx+/SU5Kui57Xd9uSo6bqu6r+068TW9N523pXp+e6k6LfE8NCas5uFAAAD7klEQVR4nO3Y65KiOhSGYUgCCCiKyMlDe/93OVlBIVqbrt416gxT7/ODUgh053MREoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZttYucLHntdeOorqMXX/PvURkdamFeHZt6/TX/GoUJwyG288tjC0P1r8a2ls4d3nHlfz42431Prk1mrKgrC7djZ+/h7XQ8srW5ctuNPbmStlHfjofLTvaE3ekem2yN/VnKRpnzWtvSjvy/Jm2u7+3hy6VFkbbyj8eFsHsOjdHSNblxlcmlkY1N+bHZryu33QS9GdpqU8fu4F6r2x4VHQovtiKSAyop7ZDgX62xv0n2yS6/Qm/U0E2trHNhS++W2UDV6Xy1qTJX4ZhxaFsGGxPeB0p7INH32FRcu3bqIlfz7tyLpFj+gZ7/luohJFMU2kWoMzsbUUo+N9/cpFulst1X4+oo1NUQgj297qqqt3d6F95j0yv5fbQ6X4KDfN3dL7azX+o/0fPfMlabctWWSoy6bt2YFpdyxOxnYwujfqiaeCsJmzT4kkrq74+Xy26MLaybfVIUh7W9la9qKrC1zdm0wdIUcVy4se1gP8VxKkGNlRActCu32Wrrxn1XyWudqoedrrBu1Xb0/mgkl03dR7l1d8EiuSdpOn5U6+mQpKHnx7bNuE8CU/v104RjepI+TEOkxHQvn1optstbevV2XmylFMbTIZX+ILYgk9hOT6d7E5CH2ZsMBUZ+HVt3fnUuihfbRj1OqtxdFv84Njndn0zMxRaEw+TtdJvRLdJTbH6/k/8XW/nT2PbGzXGjp0FvUbzYTu6mnA65p8VPxrYhtr1rPpmNzT1y9VY//rVl8WK7SD9P06FenqxuIu897mZjO7ni9KYTxWxsblKiF7ismnixSe/DcOyie0JUwVH7YbZqNrZhzJrqp52NLVgp96fC93TpE/zYVlIFqtqvk2S9adwkNnG9t7PYNk7TQ3sM67nYyiCXltnGjfLp5Zpls7HZytaPV1gaPzY3/5QFql09uOWDkUEtui3sLbu6/ya2VG680Da063zbdKtnY4uvbu3woS6+w0Nswc54i1TtUrOrhXHpqrPgm9iCZGoZqt1/j22bLMu0e3Pynrd8H7I2Wp+nAamMjBreYCjT3FYM8dewz+6JA7tyN9cgs1svNnmlLuvMor+drVQexEZeisvWf2/sBgJXvt56ZHmSKs8rfx6QlHnfdf12H0/7Dptj11Ur6f02z4/tbTvK7dchheIkZ+cne8XiaK8cp247NV3J2yYba7fkWvu8ctc01cNvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL9gtk0iYT3BR8EAAAAABJRU5ErkJggg=="
                    alt="random"
                  />
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={4}> 
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                     image="data:image/jpeg;base64,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"
                     alt="random"
                  />
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
      </div>
    </main>
  );
}

export default MainContent;