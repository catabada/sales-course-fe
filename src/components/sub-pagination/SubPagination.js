import {AppBar, Grid, IconButton, Typography} from "@mui/material";
import {LeftArrow, RightArrow} from "~/components/icons";
import {useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";

export default function SubPagination() {


    const domPaginationScroll = useRef(null)

    const [page, setPage] = useState(1);
    const [search, setSearch] = useSearchParams()

    const handelScroll = () => {
        let top = window.scrollY / 20;
        if (top < 100) {
            domPaginationScroll.current.style.top = top + '%'
        }
    }

    const nextPage = () => {
        setPage((prevState) => {
            if (prevState > 1) {
                let page = prevState - 1;
                setSearch({"page": page})
                return page
            }
            return prevState
        })
    }
    const backPage = () => {
        setPage((prevState) => {
            if (prevState < 10) {
                let page = prevState + 1;
                setSearch({"page": page})
                return page
            }
            return prevState
        })
    }


    useEffect(() => {
        window.addEventListener('scroll', handelScroll)


        // return window.removeEventListener('scroll', handelScroll)
    })
    useEffect(() => {
        let pageUrl = Number.parseInt(search.get("page") === null ? 1 : search.get("page"))
        setPage(pageUrl)
    }, [search.get("page")])

    return (
        <AppBar ref={domPaginationScroll}
                sx={{
                    width: '200px',
                    top: 0,
                    right: '-26%',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    transition: '0.6s',
                    zIndex: 10
                }}
                position={"absolute"}>
            <Grid container alignItems={"center"} spacing={2}>
                <Grid item>
                    <IconButton
                        sx={{border: '1px solid #fccf00'}}
                        aria-label="left-page"
                        onClick={nextPage}
                    >
                        <LeftArrow/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography sx={{fontSize: '1.6rem'}} variant={"body1"}>
                        {page}/10
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{border: '1px solid #fccf00'}}
                        aria-label="right-page"
                        onClick={backPage}
                    >
                        <RightArrow/>
                    </IconButton>
                </Grid>
            </Grid>
        </AppBar>
    )
}