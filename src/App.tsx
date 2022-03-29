
import { Button, Box, Typography } from "@mui/material";
import image1 from './images/backgroundPIC.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const App = () => {
  return (

    <Box sx={{
      fontFamily: 'Josefin Sans , sans-serif',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f2f7f8'
    }} >
      {/*first layer with the CV donwload button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150px'
        }}>
        <Button variant="outlined"
          sx={{
            width: '250px',
            height: '54px',

          }}
        > <Typography
          sx={{
            color: '#000',
            fontWeight: 'bold'
          }}>
            DOWNLOAD cv
          </Typography></Button>
      </Box>
      {/**end of CV download button and start of new BOX */}
      {/**New Box starts now **HERE! */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '1000px',
        mt: 20
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

        }}> {/**container for text */}
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              width: '500px',
              textTransform: 'capitalize',
              fontWeight: 600,
              color: '#40424a',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '150px',
              lineHeight: 'normal',
              fontFamily: 'ROBOTO'




            }}>{/**name typo */}
            esum brandon
          </Typography>
          <Typography
            component='p'
            sx={{
              fontSize: '60px',
              color: '#808181',
              lineHeight: 1.6,
              width: '800px',
              fontFamily: 'ROBOTO',

            }}>{/**description typo */}
            Web app, IOS, Android Software Developer
            with extensive experience woking on top ecommerce, fitness and educational web and
            mobile appications

          </Typography>
        </Box>

        <Box
          component='img'
          alt='esum'
          src={image1}
          sx={{
            width: '29%',
            height: '100%',
            maxWidth: '100%',

          }}
        >{/**container for image */}

        </Box>

      </Box>
      {/**Section for skills and programming languages known */}
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '500px',
          justifyContent: 'center',
          lineHeight: 1.6,
          ml: 20


        }}
      >
        <Typography
          component='h2'
          sx={{
            fontSize: '49px',
            fontWeight: 600,
            color: '#40424a',
            fontFamily: 'ROBOTO',
            mb: 5,
            lineHeight: 1.5
          }}
        >General Info</Typography>
        <Box
          component='span'
          sx={{
            display: 'flex',
            justifyContent: 'space-between'



          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              color: '#40424a',

            }}>E-mail: </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#808181',
            }}> esumbrandon074@gmail.com</Typography>
        </Box>

        <Box
          component='span'
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              color: '#40424a',
            }}>Current Location </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#808181',
            }}> Buea, Cameroon</Typography>
        </Box>

        <Box
          component='span'
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              color: '#40424a',
            }}>Work Eligibility </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#808181',
            }}> Cameroonian citizen (Open to relocation)</Typography>
        </Box>

        <Box
          component='span'
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              color: '#40424a',
            }}> Programming languages and libraries </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#808181',
            }}> JavaScript, Python, react, dart, react-native, flutter </Typography>
        </Box>

      </Box>
      {/** section for github, linkedin, twitter */}
      <Box component='div'
        sx={{
          display: 'flex',
          backgroundColor: '#f9f9f9',
          padding: '80px, 0',
          justifyContent: 'space-around',
          height: '250px',
          alignItems: 'center'
        }}
      >
        <Box component='span'
          sx={{
            display: 'flex',
            width: '20%',
            justifyContent: 'space-evenly',

          }}>
          <a href='https://twitter.com/BrandonEsum' target='blank'><TwitterIcon sx={{ fontSize: '70px', opacity: 0.4 }} /> </a>
          <a href="https://www.linkedin.com/in/esum-brandon-1ba3401b1/" target='blank'> <LinkedInIcon sx={{ fontSize: '70px', opacity: 0.4 }} /> </a>
          <a href="https://github.com/spyze002" target='blank'>  <GitHubIcon sx={{ fontSize: '70px', opacity: 0.4 }} /> </a>
        </Box>
        <Box component='div'
          sx={{
            backgroundColor: 'black',
            width: '30%',
            height: '3px',
            opacity: 0.3
          }}></Box>
        <Typography component='p'
          sx={{
            fontWeight: '400px',
            color: '#40424a',
            fontSize: '48px'

          }}> My Social Profiles</Typography>
      </Box>
    </Box>

  )
}
export default App;