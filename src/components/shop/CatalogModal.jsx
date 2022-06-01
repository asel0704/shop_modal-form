import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";

const style = {
  position: "absolute",
  maxHeight: 500,
  bgcolor: "background.paper",
  top: 55,
  left: "185px",
  overflowY: "auto",
  border: '2px solid #1976D2',
  borderRadius: "4px",
  display: "flex"
  
};

const StyledListItemButton =styled(ListItemButton) `
width :221px;
&:hover {
  background: #1976D2;
  color: white;
}

${({active})=> active && ({
  background: "#1976D2",
  color: "white",
})}

`

const CatalogList =({list}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <>
      <List sx={{ paddingRight: "12px", paddingTop: 0, maxHeight: "100%", overflow: "auto"}}>
        {list.map((item) => (
          <>
            <ListItem disablePadding>
              <StyledListItemButton
                 active={item === selectedCategory}
                component="a"
                href="#simple-list"

                onMouseEnter={() => { setSelectedCategory(item) }}
              >
                <ListItemText primary={item.name} />
              </StyledListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      {selectedCategory && selectedCategory.childCategories && (
        <CatalogList key= {selectedCategory.id} list={selectedCategory.childCategories}/>
      )}
    </>
  )
}


export const CatalogModal = ({catalog, ...props}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState(null);

  return (
    <Modal {...props}>
      <Box sx={style}>
     <CatalogList list ={catalog}/>
   
      </Box>
    </Modal>
  );
};