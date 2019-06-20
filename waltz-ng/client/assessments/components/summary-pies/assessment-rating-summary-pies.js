/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import template from "./assessment-rating-summary-pies.html";
import {initialiseData} from "../../../common";
import {color} from "d3-color";


const bindings = {
    summaries: "<",
    helpText: "@?"
};

const basePieConfig = {
    labelProvider: d => d.rating.name,
    valueProvider: d => d.count,
    colorProvider: d => color(d.rating.color),
    descriptionProvider: d => d.rating.description
};

const initialState = {
    summaries: [],
    helpText: "Relevant assessments",
    selectedSummary: null
};


function controller() {

    const vm = initialiseData(this, initialState);

    vm.$onInit = () => {
        console.log("init", vm.summaries);
        vm.listConfig = Object.assign({}, basePieConfig, { size: 24, onSelect: vm.onSelectRating });
        vm.selectedConfig = Object.assign({}, basePieConfig, { size: 48, onSelect: vm.onSelectRating });
    };

    vm.onSelectSummary = (s) => {
        vm.selectedSummary = s;
    };

    vm.onCloseSummary = () => {
        vm.selectedSummary = null;
        vm.selectedSegment = null;
    };

    vm.onSelectRating = (d) => {
        vm.selectedSegment = d;
    };
}

controller.$inject = [];


const component = {
    template,
    controller,
    bindings
};


export default {
    id: "waltzAssessmentRatingSummaryPies",
    component
}