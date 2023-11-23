import React from 'react'
import { Moon, Sun } from 'react-feather';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './ThemeSwitcher';
import { API_PATH } from '../../pages/authentication/ApiPath';
import { Link } from 'react-router-dom';

function NavbarDefault({ styled, search }) {
    const {userInfo} = useSelector(state => state);
    return (
        <nav
            className={`navbar navbar-top fixed-top navbar-expand ${styled === "darker" ? 'navbar-darker' : ''}`}
            id="navbarDefault">
            <div className="collapse navbar-collapse justify-content-between">
                <div className="navbar-logo">
                    <button
                        className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarVerticalCollapse"
                        aria-controls="navbarVerticalCollapse"
                        aria-expanded="false"
                        aria-label="Toggle Navigation"
                    >
                        <span className="navbar-toggle-icon">
                            <span className="toggle-line" />
                        </span>
                    </button>
                    <a className="navbar-brand me-1 me-sm-3" href="index.html">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                            <img src="../../assets/img/logos/logorestart-removebg-preview2.png" alt="" width={167} />
                            </div>
                        </div>
                    </a>
                </div>
                <div
                    className="search-box navbar-top-search-box d-none d-lg-block"
                    data-list='{"valueNames":["title"]}'
                    style={search?{ width: "25rem"} : { width: "25rem", display: 'none'}}
                >
                    <form
                        className="position-relative"
                        data-bs-toggle="search"
                        data-bs-display="static"
                    >
                        <input
                            className="form-control search-input fuzzy-search rounded-pill form-control-sm"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon" />
                    </form>
                    <div
                        className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
                        data-bs-dismiss="search"
                    >
                        <button
                            className="btn btn-link btn-close-falcon p-0"
                            aria-label="Close"
                        />
                    </div>
                    <div className="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100">
                        <div className="scrollbar-overlay" style={{ maxHeight: "30rem" }}>
                            <div className="list pb-3">
                                <h6 className="dropdown-header text-1000 fs--2 py-2">
                                    24 <span className="text-500">results</span>
                                </h6>
                                <hr className="text-200 my-0" />
                                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                                    Recently Searched{" "}
                                </h6>
                                <div className="py-2">
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-solid fa-clock-rotate-left"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                Store Macbook
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-solid fa-clock-rotate-left"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                MacBook Air - 13″
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <hr className="text-200 my-0" />
                                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                                    Products
                                </h6>
                                <div className="py-2">
                                    <a
                                        className="dropdown-item py-2 d-flex align-items-center"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="file-thumbnail me-2">
                                            <img
                                                className="h-100 w-100 fit-cover rounded-3"
                                                src="assets/img/products/60x60/3.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 text-1000 title">MacBook Air - 13″</h6>
                                            <p className="fs--2 mb-0 d-flex text-700">
                                                <span className="fw-medium text-600">
                                                    8GB Memory - 1.6GHz - 128GB Storage
                                                </span>
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        className="dropdown-item py-2 d-flex align-items-center"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="file-thumbnail me-2">
                                            <img
                                                className="img-fluid"
                                                src="assets/img/products/60x60/3.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 text-1000 title">MacBook Pro - 13″</h6>
                                            <p className="fs--2 mb-0 d-flex text-700">
                                                <span className="fw-medium text-600 ms-2">
                                                    30 Sep at 12:30 PM
                                                </span>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <hr className="text-200 my-0" />
                                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                                    Quick Links
                                </h6>
                                <div className="py-2">
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-solid fa-link text-900"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                Support MacBook House
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-solid fa-link text-900"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                Store MacBook″
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <hr className="text-200 my-0" />
                                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                                    Files
                                </h6>
                                <div className="py-2">
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-solid fa-file-zipper text-900"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                Library MacBook folder.rar
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-solid fa-file-lines text-900"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                Feature MacBook extensions.txt
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-solid fa-image text-900"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                MacBook Pro_13.jpg
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <hr className="text-200 my-0" />
                                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                                    Members
                                </h6>
                                <div className="py-2">
                                    <a
                                        className="dropdown-item py-2 d-flex align-items-center"
                                        href="pages/members.html"
                                    >
                                        <div className="avatar avatar-l status-online  me-2 text-900">
                                            <img
                                                className="rounded-circle "
                                                src={userInfo.photoURL != null ?
                                                    userInfo.photoURL.includes("http") ? 
                                                    userInfo.photoURL:
                                                    API_PATH+userInfo.photoURL:
                                                    "data:image/jpeg;base64,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"
                                                  }
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 text-1000 title">Carry Anna</h6>
                                            <p className="fs--2 mb-0 d-flex text-700">anna@technext.it</p>
                                        </div>
                                    </a>
                                    <a
                                        className="dropdown-item py-2 d-flex align-items-center"
                                        href="pages/members.html"
                                    >
                                        <div className="avatar avatar-l  me-2 text-900">
                                            <img
                                                className="rounded-circle "
                                                src={userInfo.photoURL != null ?
                                                    userInfo.photoURL.includes("http") ? 
                                                    userInfo.photoURL:
                                                    API_PATH+userInfo.photoURL:
                                                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHEREIBxMVFhUWFhUaFRUYGBYVFhAYGBEYHhUdFRcgHSggICIlGxsZIjEhJSkrLi4uGx81ODMtPSgtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgEBQYBAwL/xABGEAABAwICBQcIBgcJAQAAAAABAAIDBAUGEQcSITFBEyJRYXGBkQgUIzJCobHBQ1JicpPRFhc0U1Rj8RgzdIKSs8LS8IP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARF4Tkg9RcTivSbbsN5wyycrKPo4snEH7R3BRhctMV0vjzS4agEee4NaZpPhkPBBYQnLaVhz3anpf2ieJv3ntb8Sq/NwdiXE3pLk+VoP76XUH4Y/JZ9NoFq5edW1cTTxya9/vOSCaP0nof4un/ABWfmsqC7U9V+zzxO+69rvgVDH9n938aPwj/AN1iVOgWri51FVxOPDNr2e8ZoJ+Bz2hequLsHYlwz6S2vlcB+5l1x+GfyWTbdMV0sbxS4lgEmW8OaYZPhkfBBYVFxOFNJtuxJlDFJyUp+jkyaSfsncV2oOaD1ERAREQEREBERAREQEREBEXLY7xnBg6Dzqq50jsxFEDzpHfJo4lBscS4jpsMwmtu0gaPZG9zz0NHEqCb9j66Y/lNpw2x7Iz7EfrvHTLJwHgFj2Sx3DSzVOuNzeWwg5Ok9iMfUiHT/wCKnzDOGaXDEQo7TGGjLnO3ukPS48UEZYR0IRQ5VOKZOUdv5FhIYPvu3nuyUrWqz09nbyFriZG3oY0Nz7TxWxRAREQEREBa662envDeQukTJG9D2h2XYeC2KIIYxdoQimzqcLScm7fyLySw/cdvHfmuYsOPrpgCUWnEjHvjHsSeuwdMUnEeIVjlpcTYZpcTxGju0YcMua7c6M9LTwQfrDWI6bE0IrbTIHD2hucw9DhwK3CrRe7HcNE1WLjbXl0JOTZMuZIPqSjgf/BTdgTGcGMYPOaXmyNy5WI+tG75tPAoOpREQEREBERAREQEReE5b0GoxTf4cM00lzrjzW7hxe47mjrKgHD1oqtLNwfcLm4iFpGuR6sbfZjj6/6rI0kXqbSBdI8P2Y5xsfqM+q930kh6ht7gp0wph6LDFLHa6IDJo5zuMjjvce1BnWy3xWqJlFQMDI2ABrRsAH5rMREBERARafEOJKTDjPOLxK2McATm5/3WjaVF1509RRksstK5/Q+R2oD/AJRmfegmlFXv9e9fnreaw5f/AE+Oa3lm08xSEMvVM5nS6N2uB/lORQTQi0+HsSUmI2ecWeVsg4gHJzPvNO0LcICIiDDudviusT6KvYHxvBDmnaCPzVdcQ2iq0TXBlwtjiYXE6hPqyN9qOTr/AKqyy02K8PxYmpZLXWgZOHNdxY4eq4diD3C1/hxNTR3OhPNdvHFjhvaesLcKuOje9TaP7pJh+8nKN79R/wBVjvo5B1HZ3FWNBz3IPUREBERAREQFxOlrEhw1bpZYDlLL6OLpBcOc7uGfuXbKvWnO4Pvl0p8P0hz5MMaB/MlI+Wqg3/k+YX5GOTElWOdISyHPeGg893edncpmWvsVtbZ6eG3U+WrExrR15Dae87VsEBERAXDaS8fR4OhDIcn1EgPJs4NH1n9XxXX3KuZbYZa2pOTI2uc49QGarnhW3SaUrvJcLnnyLTrydAYHZRxjt/NB9cLYGr9I8pvd/le2Jx/vHDN0g6Im7gOvcpmsOj222IAUlMxzh9JIOUee87u5dLBA2ma2GABrWgBrRsDQNwC+yDG8xiy1eTZl0arcvgudv2j2230EVdMxrj9JGOTeO8b+9dWiCt2KcDV+jiUXuwSvdE0/3jRk6MdErdxHXuUsaNMfR4yhLJsmVEYHKM4OH1mdXwXZzwNqWuhnAc1wIc07Q4HeCq34qt0mi27x3C2Z8i468Y4OYXekjPZ+SCyyLFttcy5QxVtMc2SNa5p6iM1lICIiCGPKDwvy0ceJKQc6Mhk2W8sPqO7js712OiXEhxLbopZznLF6OXpJaOa7vGXvXTX22tu9PNbqjLVlY5p6sxsPcdqgrQZXvsd0qMP1Zy5QPaR/MiJ+WsgsKiIgIiICIiDwnLaVXLArP0nxK+vk2tbLNL3NzEfyVgbzN5tT1E/1YpHeDCVBvk4wcrV1lY7eImjPrc/M/BBP6IiAiIgjzTpcDQ2mSOM5GV8cZ+6Tmfc1YugG1CitnnuXOnke4n7Lea0e4+K+HlERF9tikG5tQzPvY8LeaGJhNZqTU9kSNPaJXIO4REQEREBRlp+tYrLZ57lzoJGuB+y7muHvHgpNXD6Z5hDZqvX9oRtHaZWoMTQXcDW2mKOQ5mJ8kY7Acx7nKQ1Ffk7xFltlkO51Q/LuYwKVEBERAVccdM/RjErK+PY10sMvc7ISfNWOUAeUdByVXR1jd5icM+tr8x8UE/A57QvVhWWbzmnp5/rRRu8WArNQEREBERBqMXfsFZ/h5v8AbKiLyavWr+yH/mpnvMPnNPUQfWikb4sIUG+TjPyVXWUbt5iacutr8j8UE/oiICIiDlNJ1lN/tlVRRDN4brsHS6PnAd+RCj7yd8QAsnw9UHJwdykQPEHZIB2HI96mxV10k4cnwHcG4msObYnP1mkDZE8+ux32Tt8ckFikXJYDxxT4vhElOQ2YAcpCTzmHpHS3rXWoCIiAoT8ojELdSDD1Oc3F3KSgcANkYPaST3Lv8eY4p8IQmSoIdMQeThB5zz0nob1qItG2HJ8eXB2Jr9m6Jr9ZxI2SvHqMb9kbPDJBL+jGymwWylopRk8t13jodJziO7MBdWvAvUBERAUF+Ur61B2Tf8FOigDyjp+Vq6OjbvETjl1ufkPggmjCP7BR/wCHh/2wtusKyw+bU9PB9WKNvgwBZqAiIgIiIPCM9hVcsCv/AEYxK+gk2NdLNF3OzMfyVjlXrTnb32O6U+IKQZcoGOB/mREfLVQWFRa+xXJt3p4bjT5asrGuHVmNo7jsWwQERfh7gwaztgG87gAg/a1eIDSvgfDfTGIXAh3KENaR3qM8faZGW8ut+GA2SQbDMdsbD9ge0fd2rjrXgO84+cLjfJHMY7aHzE5kfy4uA8EHO4rhpMPVQqcF1peMyWlus10J6OU3OC6jD+nGtogIrvGycD2s+Tee0jYfBd3ZtCNtowDcXSzu6zqN8G/muki0b2iEarKKE9oLj7yg4T9f0GWfmcmfRyjcvHJc3iDTjW1oMVojZAD7WfKPHYTsHgpj/V5af4GD/SvnLo3tEw1X0UI7AWn3FBXjCkNJiGqNTjStLBmC4u1nOmPRym5oVn8PmlZAyGxGMwtADeTIc0DuXB3nQjbawE250sDuo67fB35qPrpgK84BcbjY5HPY3aXwk5gfzIuI8UFkUUP4B0yMuBbb8TgRyHYJhsjeftj2T7uxS6xweNZu0Hcd4IQftERAVccdP/SfErKCPa1ssMXczIyfNT9fbk2z081xqMtWJjnHryGwd52KCtBlA++XSoxBVjPkw9xP8yUn5ayCwgGWwL1EQEREBERAXE6WsNnEtuligGcsXpIuklo5ze8Z+5dsvCM96CGvJ8xRy0cmG6s86Ml8Oe8tJ57e47e9TMq46SLLNo/ukeILMMo3v12fVY76SM9R29xU6YUxDFieljulERk4c5vGNw3tPYg3JOW0qAtKmkCW/TfoxhcuLNbUe5nrVLt2qzL2fj2LsdN2MDYKUWyhdlNUAgkb449zz2ncO9YGg/A4tsIxDcm+mlHogfomHj2u+CDL0a6K4bA1twvYbJU5AgEazIOpo4u6/BSiiICIiAiIgIiIIu0k6K4b+11wsYEdTkSQBqsn6nDg7r8VyWivSBLYZhhfFBcGa2oxz/Wp3Z5ar8/Z+HYp+UR6cMDi5QnENtb6aIelA+lYOPa34IJbBz2heqMtCOMDf6U2yudnNTgAE75I9zD2jce5dpivEEWGaWS6VpGTRzW8XuPqtHagjHyg8UcjHHhukPOkIfNlvDB6je87e5djolw2cNW6KKcZSy+kl6QXDmt7hl71E+jeyzaQLpJiC8jONj9d/wBV7vo4x1DZ3BWNAy3IPUREBERAREQEREGnxTh+HE1NJbK4c1248WOG5w6woBw9d6rRNcH2+5tJhcRygHqyN4SR9f8ARWWXLY7wZBjGDzWq5sjc+SlHrRu+bTxCCES/9ZmIBkSYNfZwygi292fzVk44xGBHGMgAABwAHBVhstVVaJriTc4A4EFruiWMuB1ond3yKsRhnE1LieIVlokDhlzm7nRnocOCDdIiICIiAiIgIiIC+ckYkBjkGYIII4EHgvotLibE1LhiI1l3kDRlzW73SHoaOKCAg/8AVniA5kiDX28c4Jdvfl8l7iG71Wlm4Mt9saRC0nkwfVjbxkk6/wCiw71VVWlm4g2yANAAa3oijDidaV3f8gp5wJgyDB0Hm1LzpHZcrKfWkd8mjgEGxwth+HDNNHbKEc1u88XuO9x6ytwiICIiAiIgIiICIiAiIg0+JcOU2JoTRXaMOHsnc5h6WngVBN+wDdMASm7Ybe98Y9uP12Dolj4jxCscvCM0EM4R03xTZU2KY+Tdu5ZgJYfvt3juzUrWq8094by9rmZI3Le1wOXaN4XNYr0ZW7Emc0sfJSn6SPJpJ6xuKjC5aHbpY3mqw1OJMtxa4wyfHI+KCwqKuLcY4lwz6O4slcB++i1x/rH5rPptPVXFza2kiceOTns9xzQT+igv+0A7+BH4p/6LEqdPVXLzaKkiaeGbnv8AcMkE/rXXW809nby90mZG3Le5wGfYN5UBOxjiXE3o7ayVoP7qLUH4h/NZNt0O3S+PFViWcR57y5xmk+OQ8UG+xdpvihzpsLR8o7dyzwQwfcbvPfkuYsOAbpj+UXbEj3sjPtyeu8dEUfAeAUsYU0ZW7DeU0UfKyj6STJxB6huC7UDJBqMNYcpsMwiitMYaPaO9zz0uPErcIiAiIgIiICIiAiIgIiICIiAiIgIiIPCM9hWHPaaeq/aIInfeY13xCzUQaj9GKH+Ep/wmfksqC009L+zwRN+6xrfgFmog8Ay2BeoiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//Z"
                                                  }
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 text-1000 title">John Smith</h6>
                                            <p className="fs--2 mb-0 d-flex text-700">
                                                smith@technext.it
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <hr className="text-200 my-0" />
                                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                                    Related Searches
                                </h6>
                                <div className="py-2">
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-brands fa-firefox-browser text-900"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                Search in the Web MacBook
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="apps/e-commerce/landing/product-details.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-1000 title">
                                                <span
                                                    className="fa-brands fa-chrome text-900"
                                                    data-fa-transform="shrink-2"
                                                />{" "}
                                                Store MacBook″
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="fallback fw-bold fs-1 d-none">No Result Found.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="navbar-nav navbar-nav-icons flex-row">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-icon-wait px-2">
                            <ThemeSwitcher />
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-auto-close="outside"
                        >
                            <span data-feather="bell" style={{ height: 20, width: 20 }} />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret"
                            id="navbarDropdownNotfication"
                            aria-labelledby="navbarDropdownNotfication"
                        >
                            <div className="card position-relative border-0">
                                <div className="card-header p-2">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="text-black mb-0">Notificatons</h5>
                                        <button
                                            className="btn btn-link p-0 fs--1 fw-normal"
                                            type="button"
                                        >
                                            Mark all as read
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="scrollbar-overlay" style={{ height: "27rem" }}>
                                        <div className="border-300">
                                            <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <img
                                                                className="rounded-circle"
                                                                src="assets/img/team/40x40/30.webp"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs--1 text-black">Jessie Samson</h4>
                                                            <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                                                <span className="me-1 fs--2">💬</span>Mentioned you
                                                                in a comment.
                                                                <span className="ms-2 text-400 fw-bold fs--2">
                                                                    10m
                                                                </span>
                                                            </p>
                                                            <p className="text-800 fs--1 mb-0">
                                                                <span className="me-1 fas fa-clock" />
                                                                <span className="fw-bold">10:41 AM </span>August
                                                                7,2021
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="font-sans-serif d-none d-sm-block">
                                                        <button
                                                            className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                            type="button"
                                                            data-stop-propagation="data-stop-propagation"
                                                            data-bs-toggle="dropdown"
                                                            data-boundary="window"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-bs-reference="parent"
                                                        >
                                                            <span className="fas fa-ellipsis-h fs--2 text-900" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                                            <a className="dropdown-item" href="#!">
                                                                Mark as unread
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <div className="avatar-name rounded-circle">
                                                                <span>J</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs--1 text-black">Jane Foster</h4>
                                                            <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                                                <span className="me-1 fs--2">📅</span>Created an
                                                                event.
                                                                <span className="ms-2 text-400 fw-bold fs--2">
                                                                    20m
                                                                </span>
                                                            </p>
                                                            <p className="text-800 fs--1 mb-0">
                                                                <span className="me-1 fas fa-clock" />
                                                                <span className="fw-bold">10:20 AM </span>August
                                                                7,2021
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="font-sans-serif d-none d-sm-block">
                                                        <button
                                                            className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                            type="button"
                                                            data-stop-propagation="data-stop-propagation"
                                                            data-bs-toggle="dropdown"
                                                            data-boundary="window"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-bs-reference="parent"
                                                        >
                                                            <span className="fas fa-ellipsis-h fs--2 text-900" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                                            <a className="dropdown-item" href="#!">
                                                                Mark as unread
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <img
                                                                className="rounded-circle avatar-placeholder"
                                                                src={userInfo.photoURL != null ?
                                                                    userInfo.photoURL.includes("http") ? 
                                                                    userInfo.photoURL:
                                                                    API_PATH+userInfo.photoURL:
                                                                    "data:image/jpeg;base64,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"
                                                                  }
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs--1 text-black">Jessie Samson</h4>
                                                            <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                                                <span className="me-1 fs--2">👍</span>Liked your
                                                                comment.
                                                                <span className="ms-2 text-400 fw-bold fs--2">
                                                                    1h
                                                                </span>
                                                            </p>
                                                            <p className="text-800 fs--1 mb-0">
                                                                <span className="me-1 fas fa-clock" />
                                                                <span className="fw-bold">9:30 AM </span>August
                                                                7,2021
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="font-sans-serif d-none d-sm-block">
                                                        <button
                                                            className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                            type="button"
                                                            data-stop-propagation="data-stop-propagation"
                                                            data-bs-toggle="dropdown"
                                                            data-boundary="window"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-bs-reference="parent"
                                                        >
                                                            <span className="fas fa-ellipsis-h fs--2 text-900" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                                            <a className="dropdown-item" href="#!">
                                                                Mark as unread
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-300">
                                            <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <img
                                                                className="rounded-circle"
                                                                src="assets/img/team/40x40/57.webp"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs--1 text-black">Kiera Anderson</h4>
                                                            <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                                                <span className="me-1 fs--2">💬</span>Mentioned you
                                                                in a comment.
                                                                <span className="ms-2 text-400 fw-bold fs--2" />
                                                            </p>
                                                            <p className="text-800 fs--1 mb-0">
                                                                <span className="me-1 fas fa-clock" />
                                                                <span className="fw-bold">9:11 AM </span>August
                                                                7,2021
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="font-sans-serif d-none d-sm-block">
                                                        <button
                                                            className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                            type="button"
                                                            data-stop-propagation="data-stop-propagation"
                                                            data-bs-toggle="dropdown"
                                                            data-boundary="window"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-bs-reference="parent"
                                                        >
                                                            <span className="fas fa-ellipsis-h fs--2 text-900" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                                            <a className="dropdown-item" href="#!">
                                                                Mark as unread
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <img
                                                                className="rounded-circle"
                                                                src="assets/img/team/40x40/59.webp"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs--1 text-black">Herman Carter</h4>
                                                            <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                                                <span className="me-1 fs--2">👤</span>Tagged you in
                                                                a comment.
                                                                <span className="ms-2 text-400 fw-bold fs--2" />
                                                            </p>
                                                            <p className="text-800 fs--1 mb-0">
                                                                <span className="me-1 fas fa-clock" />
                                                                <span className="fw-bold">10:58 PM </span>August
                                                                7,2021
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="font-sans-serif d-none d-sm-block">
                                                        <button
                                                            className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                            type="button"
                                                            data-stop-propagation="data-stop-propagation"
                                                            data-bs-toggle="dropdown"
                                                            data-boundary="window"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-bs-reference="parent"
                                                        >
                                                            <span className="fas fa-ellipsis-h fs--2 text-900" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                                            <a className="dropdown-item" href="#!">
                                                                Mark as unread
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <img
                                                                className="rounded-circle"
                                                                src="assets/img/team/40x40/58.webp"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs--1 text-black">Benjamin Button</h4>
                                                            <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                                                <span className="me-1 fs--2">👍</span>Liked your
                                                                comment.
                                                                <span className="ms-2 text-400 fw-bold fs--2" />
                                                            </p>
                                                            <p className="text-800 fs--1 mb-0">
                                                                <span className="me-1 fas fa-clock" />
                                                                <span className="fw-bold">10:18 AM </span>August
                                                                7,2021
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="font-sans-serif d-none d-sm-block">
                                                        <button
                                                            className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                            type="button"
                                                            data-stop-propagation="data-stop-propagation"
                                                            data-bs-toggle="dropdown"
                                                            data-boundary="window"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-bs-reference="parent"
                                                        >
                                                            <span className="fas fa-ellipsis-h fs--2 text-900" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                                            <a className="dropdown-item" href="#!">
                                                                Mark as unread
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-0 border-top border-0">
                                    <div className="my-2 text-center fw-bold fs--2 text-600">
                                        <a className="fw-bolder" href="pages/notifications.html">
                                            Notification history
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            id="navbarDropdownNindeDots"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="../../../www.w3.org/2000/svg.html"
                            >
                                <circle cx={2} cy={2} r={2} fill="currentColor" />
                                <circle cx={2} cy={8} r={2} fill="currentColor" />
                                <circle cx={2} cy={14} r={2} fill="currentColor" />
                                <circle cx={8} cy={8} r={2} fill="currentColor" />
                                <circle cx={8} cy={14} r={2} fill="currentColor" />
                                <circle cx={14} cy={8} r={2} fill="currentColor" />
                                <circle cx={14} cy={14} r={2} fill="currentColor" />
                                <circle cx={8} cy={2} r={2} fill="currentColor" />
                                <circle cx={14} cy={2} r={2} fill="currentColor" />
                            </svg>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300"
                            aria-labelledby="navbarDropdownNindeDots"
                        >
                            <div className="card bg-white position-relative border-0">
                                <div
                                    className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
                                    style={{ height: "20rem" }}
                                >
                                    <div className="row text-center align-items-center gx-0 gy-0">
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/behance.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Behance
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/google-cloud.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Cloud
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/slack.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Slack
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/gitlab.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Gitlab
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/bitbucket.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    BitBucket
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/google-drive.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Drive
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/trello.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Trello
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/figma.webp"
                                                    alt=""
                                                    width={20}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Figma
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/twitter.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Twitter
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/pinterest.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Pinterest
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img src="assets/img/nav-icons/ln.webp" alt="" width={30} />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Linkedin
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/google-maps.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Maps
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/google-photos.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Photos
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-4">
                                            <a
                                                className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                                                href="#!"
                                            >
                                                <img
                                                    src="assets/img/nav-icons/spotify.webp"
                                                    alt=""
                                                    width={30}
                                                />
                                                <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                                                    Spotify
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link lh-1 pe-0"
                            id="navbarDropdownUser"
                            href="#!"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <div className="avatar avatar-l ">
                                <img
                                    className="rounded-circle "
                                    src={userInfo.photoURL != null ?
                                        userInfo.photoURL.includes("http") ? 
                                        userInfo.photoURL:
                                        API_PATH+userInfo.photoURL:
                                        "data:image/jpeg;base64,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"
                                      }
                                    alt=""
                                />
                            </div>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
                            aria-labelledby="navbarDropdownUser"
                        >
                            <div className="card position-relative border-0">
                                <div className="card-body p-0">
                                    <div className="text-center pt-4 pb-3">
                                        <div className="avatar avatar-xl ">
                                            <img
                                                className="rounded-circle "
                                                src={userInfo.photoURL != null ?
                                                    userInfo.photoURL.includes("http") ? 
                                                    userInfo.photoURL:
                                                    API_PATH+userInfo.photoURL:
                                                    "data:image/jpeg;base64,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"
                                                  }
                                                alt=""
                                            />
                                        </div>
                                        <h6 className="mt-2 text-black">{userInfo.displayName}</h6>
                                    </div>
                                    <div className="mb-3 mx-3">
                                        <input
                                            className="form-control form-control-sm"
                                            id="statusUpdateInput"
                                            type="text"
                                            placeholder="Update your status"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="overflow-auto scrollbar"
                                    style={{ height: "10rem" }}
                                >
                                    <ul className="nav d-flex flex-column mb-2 pb-1">
                                        <li className="nav-item">
                                            <a className="nav-link px-3" href="#!">
                                                <span className="me-2 text-900" data-feather="user" />
                                                <span>Profile</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-3" href="#!">
                                                <span className="me-2 text-900" data-feather="pie-chart" />
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-3" href="#!">
                                                <span className="me-2 text-900" data-feather="lock" />
                                                Posts &amp; Activity
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-3" href="#!">
                                                <span className="me-2 text-900" data-feather="settings" />
                                                Settings &amp; Privacy{" "}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-3" href="#!">
                                                <span
                                                    className="me-2 text-900"
                                                    data-feather="help-circle"
                                                />
                                                Help Center
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-3" href="#!">
                                                <span className="me-2 text-900" data-feather="globe" />
                                                Language
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer p-0 border-top">
                                    <ul className="nav d-flex flex-column my-3">
                                        <li className="nav-item">
                                            <a className="nav-link px-3" href="#!">
                                                <span className="me-2 text-900" data-feather="user-plus" />
                                                Add another account
                                            </a>
                                        </li>
                                    </ul>
                                    <hr />
                                    <div className="px-3">
                                        {" "}
                                        <Link
                                            className="btn btn-phoenix-secondary d-flex flex-center w-100"
                                            to="/auth/signin"
                                        >
                                            <span className="me-2" data-feather="log-out">
                                                {" "}
                                            </span>
                                            Sign out
                                        </Link>
                                    </div>
                                    <div className="my-2 text-center fw-bold fs--2 text-600">
                                        <a className="text-600 me-1" href="#!">
                                            Privacy policy
                                        </a>
                                        •
                                        <a className="text-600 mx-1" href="#!">
                                            Terms
                                        </a>
                                        •
                                        <a className="text-600 ms-1" href="#!">
                                            Cookies
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavbarDefault