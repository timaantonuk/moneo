import React from "react";
import ContainerElement from "../layout/ContainerElement.tsx";
import Grid from "@mui/material/Grid2";
import { Avatar, Button, Typography } from "@mui/material";
import BreadcrumbElem from "../components/BreadcrumbElem.tsx";
import CategoriesGrid from "../components/CategoriesGrid.tsx";
import HorizontalChart from "../components/HorizontalChart.tsx";

const Categories: React.FC = () => {
  return (
    <ContainerElement
      display={"flex"}
      flexDirection={"column"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid container spacing={1} width="100%">
        <Grid size={4}></Grid>
        <Grid size={4} display="flex" alignItems="center" gap={2}>
          {" "}
          <Typography
            variant="h3"
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: 500,
              fontSize: { md: "3rem", xs: "1.7rem" },
            }}
          >
            David Linch
          </Typography>
          <Avatar
            alt="Profile photo"
            src="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"
            sx={{
              width: { md: 70, xs: 60 },
              height: { md: 70, xs: 60 },
            }}
          />
        </Grid>
        <Grid
          size={4}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            variant="contained"
            color="error"
            sx={{
              borderRadius: 6,
              fontSize: "1rem",
              paddingBlock: 1.6,
              paddingInline: 4,
            }}
          >
            Logout
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} marginBlock={2} sx={{ width: "100%" }}>
        <Grid
          size={{ xs: 12, md: 12 }}
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            order: { xs: 2, md: 1 },
          }}
          borderRadius={6}
        >
          <Typography variant="h5">Categories:</Typography>
          <BreadcrumbElem />
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            order: { xs: 1, md: 2 },
          }}
          borderRadius={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingBlock={2}
          alignItems="center"
          gap={1}
          height={600}
        >
          <CategoriesGrid />
        </Grid>

        <Grid
          size={4}
          borderRadius={6}
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            order: { xs: 3, md: 3 },
          }}
        >
          <HorizontalChart />
        </Grid>
      </Grid>
    </ContainerElement>
  );
};

export default Categories;
