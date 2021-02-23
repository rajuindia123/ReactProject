import React from 'react'
import './App.css'
import Avatar from '@material-ui/core/Avatar';
import pic from './Pic.png';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import AccessAlarmSharpIcon from '@material-ui/icons/AccessAlarmSharp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import TitleOutlinedIcon from '@material-ui/icons/TitleOutlined';
import StarRateIcon from '@material-ui/icons/StarRate';
import Sidebarchak from './Sidebarchak';
import Price from './Price';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
     
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    
  }));
const Student = () => {
    const classes = useStyles();

    return (
        <>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-sm-3">
<h6>Filters</h6>


                </div>
                <div className="col-sm-5">

                <h6>featured Experts</h6>

                </div>
                <div className="col-sm-2">

                <select name="cars" id="cars">
                     <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
  
  
                </div>


            </div>
  <div className="row">
      <div className="col-sm-3 mt-3 shadow-sm bg-white">
        <p>RATINGS</p>
      <Sidebarchak/>
      <Price/>
      

      
      </div>
      
      <div className="col-sm-8 mt-3   " >
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/>
              <button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg ">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>
          <div className="inerleftside shadow-sm bg-white rounded">

          <div className="img">
          <Avatar alt="Remy Sharp" src={pic} className={classes.large} />
          <p className="price">Price: <span className='free'>Free</span><br/><StarRateIcon className='star'/> <span className='star'> 4.0</span> (120)</p>
          </div>
          <div className='name'>
              
              <h5 >Devid Melvik</h5> 
              
              <FavoriteBorderSharpIcon className='icon'/><button type="button" class="btn bt btbg">View Profile</button>
              
              
              <p className='text'> Founder @ the millennlals & CEO @ABC</p>

             <p className='textlocation'> < AccessAlarmSharpIcon/> 02 free session Avaliable <LocationOnOutlinedIcon/>Tampa.ELUSA <TitleOutlinedIcon/>Greek English French  </p>
             <p className='nortext'>Though most of you are invited for a specific role, if not, please pick only one of the following assignments to apply for the internship. </p>
              </div>
         <p className='mai'><span className='mai1'>Marketing </span><span className='mai2'> SEO </span><span className='mai3'>Content Marketing </span><span className='mai4'>Marketing Actomation </span></p>
          </div>

      </div>
      
      
      
  </div>
  
</div>
        
        
        </>
    )
}

export default Student
