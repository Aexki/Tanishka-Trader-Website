import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const categoryData = {
    "Home and Living": {
        background: "/category/background/doodle.jpg",
        categoryName: "homeAndLiving",
        images: [
            {
                img: "/category/homeAndLiving/curtain.jpg",
                title: "Curtain",
                subTitle: "Home and living",
                fontSize: "14px",
            },
            {
                img: "/category/homeAndLiving/blinds.webp",
                title: "Blinds",
                subTitle: "Home and living",
                fontSize: "14px",
            },
            {
                img: "/category/homeAndLiving/flooring.jpg",
                title: "Flooring",
                subTitle: "Home and living",
                fontSize: "14px",
            },
            {
                img: "/category/homeAndLiving/bedsheet.webp",
                title: "Bedsheet",
                subTitle: "Home and living",
                fontSize: "14px",
            },
            {
                img: "/category/homeAndLiving/comforter.webp",
                title: "Comforter",
                subTitle: "Home and living",
                fontSize: "14px",
            },
            {
                img: "/category/homeAndLiving/towel.webp",
                title: "Towel",
                subTitle: "Home and living",
                fontSize: "14px",
            },
            {
                img: "/category/homeAndLiving/pillows.jpg",
                title: "Pillow",
                subTitle: "Home and living",
                fontSize: "14px",
            },

            {
                img: "/category/homeAndLiving/mattressProtector.webp",
                title: "Mattress Protector",
                subTitle: "Home and living",
                fontSize: "14px",
            },
        ],
    },
    "Hotel Linen": {
        background: "/category/background/doodle.jpg",
        categoryName: "hotelLinen",
        images: [
            {
                img: "/category/hotel/bedsheet.jpg",
                title: "Bedsheet",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
            {
                img: "/category/hotel/cushion.jpg",
                title: "Cushion",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
            {
                img: "/category/hotel/matressTopper.jpg",
                title: "Mattress Topper",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
            {
                img: "/category/hotel/bathrobe.jpg",
                title: "Bath Robe",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
            {
                img: "/category/hotel/poolTowel.jpg",
                title: "Pool Towel",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
            {
                img: "/category/hotel/mat.jpg",
                title: "Mat",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
            {
                img: "/category/hotel/pillow.jpg",
                title: "Pillow",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
            {
                img: "/category/hotel/towel.jpg",
                title: "Towel",
                subTitle: "Hotel Linen",
                fontSize: "14px",
            },
        ],
    },
    Childcare: {
        background: "/category/background/stars.jpg",
        categoryName: "childCare",
        images: [
            {
                img: "/category/childcare/drySheet.webp",
                title: "Dry Sheet",
                subTitle: "Child Care",
                fontSize: "14px",
            },
            {
                img: "/category/childcare/towel.webp",
                title: "Towels",
                subTitle: "Child Care",
                fontSize: "14px",
            },
            {
                img: "/category/childcare/diaper.jpg",
                title: "Re-usable Diaper",
                subTitle: "Child Care",
                fontSize: "14px",
            },
            {
                img: "/category/childcare/bips.webp",
                title: "Baby Bibs",
                subTitle: "Child Care",
                fontSize: "14px",
            },
            {
                img: "/category/childcare/wrapper.png",
                title: "Baby Wrapper",
                subTitle: "Child Care",
                fontSize: "14px",
            },
            {
                img: "/category/childcare/carrier.webp",
                title: "Baby Carrier",
                subTitle: "Child Care",
                fontSize: "14px",
            },
            {
                img: "/category/childcare/mosquitoNet.webp",
                title: "Mosquito Bed Net",
                subTitle: "Child Care",
                fontSize: "14px",
            },
            {
                img: "/category/childcare/comforter.jpg",
                title: "Kid Comforter",
                subTitle: "Child Care",
                fontSize: "14px",
            },
        ],
    },
};

export const Category = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
            {Object.entries(categoryData).map((pair) => {
                const key = pair[0],
                    items = pair[1]["images"],
                    category = pair[1]["categoryName"];
                return (
                    <Box
                        sx={{
                            padding: { xs: "0 30px", lg: "0 200px" },
                        }}
                        key={key}
                    >
                        <Typography
                            variant={matchDownMd ? "h4" : "h2"}
                            fontFamily={"Raleway"}
                            sx={{
                                margin: "80px 0 20px 0",
                                textAlign: "center",
                            }}
                        >
                            {key}
                        </Typography>
                        <div
                            style={{
                                height: "7px",
                                width: matchDownMd ? "30%" : "10%",
                                backgroundImage:
                                    "linear-gradient(to right, blue , #0ab4a4)",
                                margin: "0 auto 30px auto",
                            }}
                        ></div>
                        <ImageList
                            sx={{ width: "100%", margin: "50px 0" }}
                            cols={matchDownMd ? 2 : 3}
                            gap={matchDownMd ? 10 : 40}
                        >
                            {items.map((item) => (
                                <ImageListItem
                                    key={item.img}
                                    sx={{ overflow: "hidden" }}
                                    className={"categoryItem"}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className={
                                            matchDownMd
                                                ? "categoryImagesSmall"
                                                : "categoryImages"
                                        }
                                    />
                                    <Link
                                        to={`/product/${category}/${
                                            item.img.split(".")[0].split("/")[
                                                item.img
                                                    .split(".")[0]
                                                    .split("/").length - 1
                                            ]
                                        }`}
                                    >
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.subTitle}
                                        />
                                    </Link>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                );
            })}
        </div>
    );
};
