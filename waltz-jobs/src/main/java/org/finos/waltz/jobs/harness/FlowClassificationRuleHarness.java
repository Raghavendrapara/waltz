/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific
 *
 */

package org.finos.waltz.jobs.harness;

import org.finos.waltz.service.DIConfiguration;
import org.finos.waltz.service.flow_classification_rule.FlowClassificationRuleService;
import org.jooq.DSLContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class FlowClassificationRuleHarness {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(DIConfiguration.class);
        DSLContext dsl = ctx.getBean(DSLContext.class);

        FlowClassificationRuleService svc = ctx.getBean(FlowClassificationRuleService.class);
//        AuthSourceRatingCalculator authSourceRatingCalculatorCalculator = ctx.getBean(AuthSourceRatingCalculator.class);
//        LogicalFlowDecoratorRatingsCalculator flowCalculator = ctx.getBean(LogicalFlowDecoratorRatingsCalculator.class);
//        LogicalFlowDecoratorSummaryDao decoratorDao = ctx.getBean(LogicalFlowDecoratorSummaryDao.class);
//        AuthoritativeSourceDao dao = ctx.getBean(AuthoritativeSourceDao.class);

        boolean b = svc.fastRecalculateAllFlowRatings();

//        System.exit(-1);
    }


}
