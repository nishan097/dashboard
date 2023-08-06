import { CircleRounded, Dashboard, GroupRounded } from "@mui/icons-material/";
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import GroupsIcon from '@mui/icons-material/Groups';
import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
import AddchartIcon from '@mui/icons-material/Addchart';
export const menus = [
  {
    name: "ड्यासबोर्ड",
    icon: <Dashboard style={{ color: "#fcfcfc" }} />,
    path: "/",
    subMenus: [],
  },


  {
    name: "कर्मचारी विवरण",
    icon: <SupervisedUserCircleRoundedIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "परिवार विवरण",
    icon: <GroupRounded style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "नागरीक",
    icon: <GroupRounded style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "सरकार संस्थाको विवरण",
    icon: <PolylineOutlinedIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "निजी तर गैरसरकारी संस्थाको विवरण",
    icon: <GroupRounded style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "रिपोर्टहरू",
    icon: <ViewColumnIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "नागरिक सेवा व्यवस्थापन",
    icon: <AddchartIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },

  {
    name: "पालिका सेवा सुविधा पोर्टल",
    icon: <AddchartIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "मेयर कनेक्ट",
    icon: <MessageRoundedIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "जन प्रतिनिधि बैठक ",
    icon: <GroupsIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },

  {
    name: "कन्फिगरेसन ",
    icon: <SettingsRoundedIcon style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },


];
