import { Grid, Card, CardContent, Typography } from '@mui/material'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import '../App.css';
import styled from 'styled-components';
import devider2 from '../assets/line2.svg';



const Tools = () => {

    const tools = [
        {
            key: "1",
            name : "Multimedia Editing",
            description : "Edit and enhance your videos, audio, and images with an easy-to-use interface and a wide range of tools and effects.",
            icon: <img src={icon1} alt="My Image" />,
        },
        {
            key: "2",
            name : "Powerful Conversion",
            description : "Quickly and easily convert your media files to a variety of formats with our powerful FFmpeg engine, ensuring excellent output every time.",
            icon: <img src={icon3} alt="My Image"/>,
        },
        {
            key: "3",
            name : "Streamlined Workflow",
            description : "Enjoy a streamlined workflow with efficient file handling, drag-and-drop functionality, and batch processing capabilities.",
            icon: <img src={icon2} alt="My Image"  />,
        },
        
        
    ]
    const HeaderTitle = styled.h1`
        font-size: 4rem;
        margin-bottom: 0.3rem;
        margin-left: 5rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
`;

const devider = styled.div`
    margin-left: 5rem;
`;

    return (
        <>
        <HeaderTitle>WHY RevideoX
        <img src={devider2}alt="" />
        </HeaderTitle>
        
        <Grid container spacing={2}
            sx={{
                padding: "30px"
            }}
        >
            
            {tools.map((tool) => (
                <Grid key={tool.key} item xs={12} sm={6} md={3} lg={4}>
                    <Card sx={{
                        height: '100%',
                        transition: 'background-color 0.2s ease-in-out',
                        backgroundColor: 'white',
                        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        color: 'black',
                        borderRadius: 3,
                        border: '2px solid black',
                        '&:hover': {
                            backgroundColor: '#30448c',
                            color: 'white',
                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            border: '2px solid #30448c',
                            transform: 'scale(1.02)',
                            boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
                        },
                    }}>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flexGrow: 1,
                            textAlign: 'center'
                        }}>
                           {tool.icon}
                            <Typography variant="h5" sx={{
                                fontWeight: 'bold',
                                paddingTop: '1.2rem',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                fontSize : '1.7rem'
                            }}>
                               {tool.name}
                            </Typography>
                            <Typography variant="body1" sx={{
                                    flexGrow: 1,
                                    fontSize: '1.5rem',
                                    fontWeight: '400',
                                }}>
                                {tool.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </>
    )
}

export default Tools