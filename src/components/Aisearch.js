/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
    ReactiveBase,
    ResultList,
    MultiList,
    RatingsFilter,
    SelectedFilters,
    MultiDataList,
    SearchBox,
    RangeSlider,
    ReactiveList,
} from "@appbaseio/reactivesearch";

import { ReactiveGoogleMap } from "@appbaseio/reactivemaps";
//import "./styles.css";

// Importing Images
import americanFood from "./Images/americanFood.jpg";
import barFood from "./Images/barFood.jpeg";
import breakfast from "./Images/breakfast.jpeg";
import desserts from "./Images/desserts.jpeg";
import sandwich from "./Images/sandwich.jpeg";
import '../styles/Aisearch.css';
import { AiFillStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Aisearch extends Component {
    onData(resturant) {
        const image =
            resturant.cuisine === "Bar Food"
                ? barFood
                : resturant.cuisine === "Desserts"
                    ? desserts
                    : resturant.cuisine === "Breakfast"
                        ? breakfast
                        : resturant.cuisine === "American"
                            ? americanFood
                            : sandwich;

        const stars = [];
        const { rating, currency, address, cuisine, average_cost_for_two, code, delivering_now, has_table_booking
            , location: { lat, lon }, name, online_delivery, price_range, restaurant_id
        } = resturant;

        for (let x = 0; x < rating; x++) {
            stars.push(
                <span key={x}><AiFillStar style={{ color: "red" }} /></span>
            );
        }
        //image || 
        //18341806
        //41697649
        return (
            <ReactiveList.ResultListWrapper>
                <ResultList
                    key={resturant._id} id={resturant._id}
                    onMouseMove={() => { document.getElementById(resturant._id).style.color = "gold"; }} style={{ background: "#F9CEEE" }}
                    onClick={() => {
                        var data = "Name : " + name + "." +
                            '\n' + "Rating  : " + rating + "." +
                            '\n' + "Address : " + address + ".";
                        toast.info(data, {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        //setTimeout(() => { this.navigate('/book'); /**window.location.href = "/book"; */ }, 1000)

                    }}>
                    <ResultList.Content>
                        <ResultList.Title> {rating} {name}</ResultList.Title>
                        <ResultList.Description>
                            <div>
                                <p>{address}</p>
                                <div>Avg. Customer Reviews :  {stars}</div>
                                <span key="currency" className="tag">{currency}</span>
                                <span className="tag">{cuisine}</span>
                                <span className="tag">Avg. cost for two : {average_cost_for_two}</span>
                                <span className="tag">Online Delivering : {online_delivery ? "Yes" : "No"}</span>
                                <span className="tag">Delivery Now : {delivering_now ? "Yes" : "No"}</span>
                                <span className="tag">Has Table Booking : {has_table_booking ? "Yes" : "No"}</span>

                                <span className="tag">Price range : {price_range}</span>

                            </div>
                        </ResultList.Description>
                    </ResultList.Content>
                </ResultList>
            </ReactiveList.ResultListWrapper>
        );
    }

    onPopoverClick(marker) {
        console.log(marker);
        return (
            <div
                className="row"
                style={{ margin: "0", maxWidth: "300px", paddingTop: 10, width: "100%" }}
            >
                <div className="col s12">
                    <div>
                        <strong>{marker.name}</strong>
                    </div>
                    <p style={{ margin: "5px 0", lineHeight: "18px" }}>
                        {marker.address}
                    </p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container-fluid" style={{ width: "100%" }}>
                <ToastContainer />
                {/** app="yelp-app" app="cheap-resto-app"*/}
                <ReactiveBase
                    app="yelp-app"
                    url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
                    credentials="4030900a4f68:0a5020d9-f6e4-40e1-89f5-d563faa9d923"
                    enableAppbase
                >
                    {/** Top Navigation bar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "white" }}>
                        {/** Left Side */}
                        <a className="navbar-brand" href="#">
                            {/**Cheap Resto Ai Search */}
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"

                        >
                            {/** Middle Side Searchbar  */}
                            <div className="col-lg-7 dataSearch">
                                <SearchBox
                                    componentId="nameReactor"
                                    placeholder="Search For Restaurants, Bars..."
                                    dataField="name"
                                    searchInputId="NameSearch"
                                    iconPosition="left"
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with restaurants search
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                    queryFormat="and"
                                    autosuggest={true}
                                    filterLabel="search"
                                    enableRecentSuggestions={true}
                                    enablePopularSuggestions={true}
                                    enablePredictiveSuggestions={true}
                                    popularSuggestionsConfig={{
                                        size: 3,
                                        minHits: 2,
                                        minChars: 4,
                                    }}
                                    recentSuggestionsConfig={{
                                        size: 3,
                                        minChars: 4,
                                    }}
                                    index="yelp-app"
                                    size={10}
                                    addonAfter={<span className="focus-shortcut">#</span>}
                                />
                            </div>
                            {/**Right side */}
                            <div className="links">
                            </div>
                        </div>
                    </nav>

                    <div className="row" style={{ height: "600px", width: "100%", display: "flex", backgroundColor: "#F9F3EE" }}>
                        {/** Left box for filter options */}
                        <div style={{ width: "25%", height: "600px" }} className="col-8 col-lg-3 col-md-3 col-sm-4 scroll" >
                            {/** View filter option for Currency */}
                            <div className="box" style={{ width: "100%" }}>
                                <MultiList
                                    dataField="currency.keyword"
                                    title="Filter With Currency Options"
                                    componentId="currencyReactor"
                                    placeholder="Filter Currency"
                                    showFilter={true}
                                    filterLabel="Currency Options"
                                    react={{
                                        and: [
                                            "ratingsReactor",
                                            "cuisineReactor",
                                            "deliveringNowReactor",
                                            "tableBookinReactor",
                                            "deliveryReactor",
                                            "bookingReactor",
                                            "nameReactor",
                                            "RangeSliderSensor",
                                        ],
                                    }}
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with Currency MultiList
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                />
                            </div>
                            {/** View filter option for Cuisine */}
                            <div className="box" sstyle={{ width: "100%" }}>
                                <MultiList
                                    dataField="cuisine.keyword"
                                    title="Filter With Cuisine Options"
                                    componentId="cuisineReactor"
                                    placeholder="Filter Cuisine"
                                    showFilter={true}
                                    filterLabel="Cuisine Options"
                                    react={{
                                        and: [
                                            "ratingsReactor",
                                            "currencyReactor",
                                            "deliveringNowReactor",
                                            "tableBookinReactor",
                                            "musicReactor",
                                            "bookingReactor",
                                            "nameReactor",
                                            "RangeSliderSensor",
                                        ],
                                    }}
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with Cuisine MultiList
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                />
                            </div>
                            {/** View filter option for Average Cost for Two RangeSlider*/}
                            <div className="box" style={{ width: "100%" }}>
                                <RangeSlider
                                    componentId="RangeSliderSensor"
                                    dataField="average_cost_for_two"
                                    title="Average Cost for Two"
                                    range={{
                                        start: 0,
                                        end: 7000,
                                    }}
                                    rangeLabels={{
                                        start: "Low",
                                        end: "High",
                                    }}
                                    react={{
                                        and: ["cuisineReactor", "currencyReactor"],
                                    }}
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with Average Cost for Two RangeSlider
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                />
                            </div>
                            {/** View filter option for Avg. Customer Reviews */}
                            <div className="box" style={{ width: "100%" }}>
                                <RatingsFilter
                                    componentId="ratingsReactor"
                                    dataField="rating"
                                    title="Avg. Customer Reviews"
                                    data={[
                                        { start: 5, end: 5, label: ">= 5 stars" },
                                        { start: 4, end: 5, label: ">= 4 stars" },
                                        { start: 3, end: 5, label: ">= 3 stars" },
                                        { start: 2, end: 5, label: ">= 2 stars" },
                                        { start: 1, end: 5, label: ">  1 stars" },
                                    ]}
                                    showFilter={true}
                                    filterLabel="Avg. Customer Reviews"
                                    react={{
                                        and: [""],
                                    }}
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with RatingsFilter
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                />
                            </div>
                            {/** View filter option for Refine by */}
                            <div className="box" style={{ width: "100%" }}>
                                <MultiDataList
                                    dataField="delivering_now"
                                    componentId="deliveringNowReactor"
                                    title="Refine By"
                                    showSearch={false}
                                    data={[
                                        {
                                            label: "Delivering Now",
                                            value: true,
                                        },
                                    ]}
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with Delivering Now MultiDataList!!
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                />

                                <MultiDataList
                                    dataField="has_table_booking"
                                    componentId="tableBookinReactor"
                                    showSearch={false}
                                    data={[
                                        {
                                            label: "Has Table Online Bookings",
                                            value: true,
                                        },
                                    ]}
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with Table Booking MultiDataList!
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                />
                                <MultiDataList
                                    dataField="online_delivery"
                                    componentId="deliveryReactor"
                                    showSearch={false}
                                    data={[
                                        {
                                            label: "Online Delivery",
                                            value: true,
                                        },
                                    ]}
                                    renderError={(error) => (
                                        <div>
                                            Something went wrong with Online Delivery MultiDataList!
                                            <br />
                                            Error details
                                            <br />
                                            {error}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        {/** Middle box for view available restaurents  */}
                        <div style={{ width: "50%", height: "600px", background: "gold" }} className="col-12 col-lg-6 cowl-md-6 col-sm-8 scroll marginBottom" >
                            {/** searching/filtering result */}
                            <SelectedFilters />
                            {/** View List of Restaurent results */}
                            <ReactiveList

                                componentId="queryResult"
                                dataField="name"
                                from={0}
                                size={15}
                                renderItem={this.onData}
                                pagination={true}
                                react={{
                                    and: [
                                        "currencyReactor",
                                        "ratingsReactor",
                                        "cuisineReactor",
                                        "deliveringNowReactor",
                                        "bookingReactor",
                                        "deliveryReactor",
                                        "tableBookinReactor",
                                        "nameReactor",
                                        "RangeSliderSensor",
                                    ],
                                }}
                                renderError={(error) => (
                                    <div>
                                        Something went wrong with ResultList!
                                        <br />
                                        Error details
                                        <br />
                                        {error}
                                    </div>
                                )}
                            />
                        </div>
                        {/* Right box for View  Searched Restaurent with Google map  */}
                        <div style={{ width: "25%", height: "600px" }} className="col-lg-3 col-md-3 col-sm-6"  >
                            <ReactiveGoogleMap
                                dataField="location"
                                componentId="maps"
                                defaultZoom={3}
                                defaultCenter={{ lat: 14.55436, lng: -85.76 }}
                                showMapStyles={true}
                                showSearchAsMove={true}
                                showMarkerClusters={true}
                                defaultMapStyle="Light Monochrome"
                                onPopoverClick={this.onPopoverClick}
                                autoCenter={true}
                                size={100}
                                react={{
                                    and: [
                                        "currencyReactor",
                                        "ratingsReactor",
                                        "cuisineReactor",
                                        "deliveringNowReactor",
                                        "bookingReactor",
                                        "deliveryReactor",
                                        "tableBookinReactor",
                                        "nameReactor",
                                        "RangeSliderSensor",
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </ReactiveBase>
            </div>
        );
    }
}

export default Aisearch;

