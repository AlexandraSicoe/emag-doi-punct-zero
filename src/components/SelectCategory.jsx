import * as React from "react";
import Select from "@mui/joy/Select";
import Option, { optionClasses } from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";

function SelectCategory({ data, setSelectedCategory }) {
  const group = {};

  data.forEach((mainCategory) => {
    const { title, leafCategories } = mainCategory;
    group[title] = leafCategories.map((leafCategory) => leafCategory.title);
  });

  return (
    <Select
      placeholder="Alege categorie"
      onChange={(e) => {
        const leafCategoryTitle = e.target.textContent;
        data.forEach((categorieMare) => {
          categorieMare.leafCategories.forEach((category) => {
            if (category.title === leafCategoryTitle) {
              setSelectedCategory(category.id);
            }
          });
        });
      }}
      slotProps={{
        listbox: {
          component: "div",
          sx: {
            maxHeight: 240,
            overflow: "auto",
            "--List-padding": "0px",
            "--ListItem-radius": "0px",
          },
        },
      }}
      sx={{ width: "100%" }}
    >
      {Object.entries(group).map(([name, animals], index) => (
        <React.Fragment key={name}>
          {index !== 0 && <ListDivider role="none" />}
          <List
            aria-labelledby={`select-group-${name}`}
            sx={{ "--ListItemDecorator-size": "28px" }}
          >
            <ListItem id={`select-group-${name}`} sticky>
              <Typography level="body-xs" textTransform="uppercase">
                {name} ({animals.length})
              </Typography>
            </ListItem>
            {animals.map((anim) => (
              <Option
                key={anim}
                value={anim}
                label={
                  <React.Fragment>
                    <Chip
                      size="sm"
                      color={"primary"}
                      sx={{ borderRadius: "xs", mr: 1 }}
                    >
                      {name}
                    </Chip>{" "}
                    {anim}
                  </React.Fragment>
                }
                sx={{
                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]: {
                    opacity: 1,
                  },
                }}
              >
                <ListItemDecorator sx={{ opacity: 0 }}>
                  <Check />
                </ListItemDecorator>
                {anim}
              </Option>
            ))}
          </List>
        </React.Fragment>
      ))}
    </Select>
  );
}
export default SelectCategory;
