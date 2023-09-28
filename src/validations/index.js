import * as Yup from "yup";
const validate = {
  displayError: (touched, errors, variable) => {
    return (
      touched[variable] &&
      errors[variable] && <span className="error">{errors[variable]}</span>
    );
  },

  //Cutsomer schemas
  customerSignup: Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be atleast 3 Characters"),
    email: Yup.string()
      .required("Email  is required")
      .email("Enter valid Email Address"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
  }),
  loginSchema: Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least of 5 characters")
      .required("Password is required"),
  }),
  addSample: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    unique_code: Yup.string().required("Unique Code is Required"),
    generic_name: Yup.string().required("Generic Name is Required"),
    retesting_period: Yup.string().required("Retesting Period is Required"),
  }),
  addSample: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    unique_code: Yup.string().required("Unique Code is Required"),
    generic_name: Yup.string().required("Generic Name is Required"),
    retesting_period: Yup.string().required("Retesting Period is Required"),
  }),
  addESampling: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    product_name: Yup.string().required("product_name is required"),
    check_point: Yup.string().required("check_point is required"),
    cracks_observed: Yup.string().required("cracks_observed is required"),
    received_on: Yup.string().required("received_on is required"),
    no_of_containers: Yup.string().required("no_of_containers is required"),
    no_of_containers_tobe_sampled: Yup.string().required(
      "no_of_containers_tobe_sampled is required"
    ),
    containers_sampled: Yup.string().required("containers_sampled is required"),
    sampling_conclusion: Yup.string().required(
      "sampling_conclusion is required"
    ),
    intiated_by: Yup.string().required("intiated_by is required"),
    initiated_on: Yup.string().required("initiated_on is required"),
  }),
  addProduct: Yup.object().shape({
    product_name: Yup.string().required("Product Name is required"),
    product_code: Yup.string().required("Product Code is Required"),
    generic_name: Yup.string().required("Generic name is Required"),
    retesting_period: Yup.string().required("Re-testing period  is Required"),
  }),
  updateStatus: Yup.object().shape({
    status: Yup.string().required("Status is required"),
  }),

  updateRejectedStatus: Yup.object().shape({
    status: Yup.string().required("Status is required"),
    remarks: Yup.string().required("Remarks is required"),
  }),

  addSampleType: Yup.object().shape({
    sampleType_name: Yup.string().required("Sample Type Name is required"),
  }),

  addSpecificationType: Yup.object().shape({
    specification_type: Yup.string().required(
      "Specification Type Name is required"
    ),
  }),
  addTestTechnique: Yup.object().shape({
    test_technique_name: Yup.string().required("Technique Name is required"),
    test_technique_description: Yup.string().required(
      "Technique Description is required"
    ),
    technique_type: Yup.string().required("Technique Type is required"),
  }),
  addTestCategory: Yup.object().shape({
    name: Yup.string().required("Category Name is required"),
    description: Yup.string().required("Category Description is required"),
    unique_code: Yup.string().required("Unique Code is required"),
  }),

  addInstrumentCategory: Yup.object().shape({
    category_name: Yup.string().required("Category Name is required"),
    description: Yup.string().required("Category Description is required"),
  }),

  addCalibrationType: Yup.object().shape({
    calibration_type: Yup.string().required("Calibration Type is required"),
    calibration_type_prefix: Yup.string().required(
      "Calibration Type Prefix is required"
    ),
  }),

  addTestRegistration: Yup.object().shape({
    specification: Yup.mixed().required("Specification is required"),
    product_name: Yup.string().required("Product Name is required"),
    test_name: Yup.string().required("Test Name is required"),
    test_code: Yup.string().required("Test Code is required"),
    method_no: Yup.string().required("Method Number is required"),
    test_category: Yup.string().required("Test Category is required"),
    test_technique: Yup.string().required("Test Technique is required"),
    test_type: Yup.string().required("Test Type is required"),
  }),
  addSpecification: Yup.object().shape({
    product: Yup.mixed().required("Product Code  is required"),
    product_name: Yup.string().required("Product Name Code  is required"),
    specification_id: Yup.string().required("Specification Id  is required"),
    specification_type: Yup.string().required("Specification Type is required"),
    sample_type: Yup.string().required("Sample Type is required"),
    effective_from: Yup.string().required("Effect from is required"),
    review_date: Yup.string().required("Review date is required"),
    supersedes: Yup.string().required("Supersedes  is required"),
    standardTest: Yup.string().required(
      "Standard test procedure no is required"
    ),
  }),
  addSolutions: Yup.object().shape({
    name: Yup.string().required("Solution Name is required"),
    prefix: Yup.string().required("Prefix is required"),
    theoretical_strength: Yup.string().required(
      "Theoretical Strength is required"
    ),
    uom: Yup.string().required("UOM unit is required"),
    solution_expiry_period: Yup.number().required(
      "Solution Expiry Data is required"
    ),
    standardization_schedule: Yup.number().required(
      "Standardization Schedule is required"
    ),
    preparation_method: Yup.mixed().required("Preparation Method is required"),
    comments: Yup.string().required("Comments are required"),
  }),
  addAnalyst: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    role: Yup.string().required("Analyst Role is required"),
  }),

  addNomination: Yup.object().shape({
    analyst: Yup.mixed().required("Analyst is required"),
    test_technique: Yup.mixed().required("Test Technique  is required"),
    training_documents: Yup.mixed().required("Training Documents  is required"),
    past_experience: Yup.string().required("Past Experience  is required"),
    total_experience: Yup.string().required("Total Experience  is required"),
    justification_for_direct_nomination: Yup.string().required(
      "Justification for direct nomination  is required"
    ),
  }),
  addTrainingConfirmation: Yup.object().shape({
    analyst: Yup.mixed().required("Analyst is required"),
    test_technique: Yup.mixed().required("Test Technique  is required"),
    training_documents: Yup.mixed().required("Training Documents  is required"),
    training_details: Yup.string().required("Training Details  is required"),
  }),
  addProposal: Yup.object().shape({
    analyst_training_confirmation_id: Yup.mixed().required(
      "Training Confirmation is required"
    ),
    test_plan: Yup.mixed().required("Test Plan  is required"),
    ar_no: Yup.string().required("Ar No.  is required"),
    due_date: Yup.string().required("Due date  is required"),
  }),
  addTemplate: Yup.object().shape({
    analyst_name: Yup.string().required("Template Name is required"),
    unique_code: Yup.string().required("Unique Code is required"),
    no_checkitem: Yup.string().required("CheckItem No. is required"),
    checkItems: Yup.array().of(
      Yup.object().shape({
        checkItem: Yup.string().required("Check Item  is Required"),
      })
    ),
  }),

  worksheetResources: Yup.object().shape({
    resource_name: Yup.string().required("Worksheet Resource Name is required"),
  }),
  worksheetFields: Yup.object().shape({
    field_name: Yup.string().required("Worksheet Field Name is required"),
    sample_type: Yup.mixed().required("Binds to is required"),
  }),
  typeOfSections: Yup.object().shape({
    type_of_section: Yup.string().required("Type Of Section is required"),
    prefix: Yup.string().required("Prefix is required"),
  }),
  addFunctionalGrouping: Yup.object().shape({
    group_name: Yup.string().required("Group Name is required"),
    group_description: Yup.string().required("Description is required"),
    test_technique: Yup.array().test({
      message: "Atleast Select One Technique",
      test: (arr) => arr.length !== 0,
    }),
  }),
  addWorksheet: Yup.object().shape({
    name: Yup.string().required("Worksheet Name is required"),
    product: Yup.mixed().required("Product Name is required"),
  }),
  addGroupName: Yup.object().shape({
    group_name: Yup.string().required("Group Name is required"),
    description: Yup.string().required("Group Description is required"),
  }),

  addSamplingField: Yup.object().shape({
    field_name: Yup.string().required("Field Name is required"),
    field_type: Yup.mixed().required("Field Type is required"),
  }),

  projectListValidation: Yup.object().shape({
    project_name: Yup.string().required("Project Name is required"),
    unique_code: Yup.mixed().required("Unique Code is required"),
    description: Yup.string().required("Description is required"),
  }),

  approvedVendorValidation: Yup.object().shape({
    product_name: Yup.mixed().required("Product/Material Name is required"),
    vendor_name: Yup.string().required("Vendor Name is required"),
    qualification_criteria: Yup.string().required(
      "Qualification Criteria is required"
    ),
  }),

  addTestPlan: Yup.object().shape({
    specification_id: Yup.mixed().required("Specification  is required"),
    test_plan_comments_: Yup.string().required("Comments Required"),
    sampling_quantity_UOM: Yup.string().required("Sampling Quantity UOM"),
    // complete_testing_frequency: Yup.string().required(
    //   "Testing frequency required"
    // ),
    // reserve_sample_quantity: Yup.string().required(
    //   "Reserve sample Quantity is required"
    // ),
    // description_for_sampling_quantity: Yup.string().required(
    //   "Description is required"
    // ),
    // parent_test_configuration_required: Yup.string().required(
    //   "Test Configuration is Required"
    // ),
    // coa_template: Yup.mixed().required("Coa Template is Required"),
    test_groupings: Yup.array().test({
      message: "Atleast Select One Test Registration",
      test: (arr) => arr.length !== 0,
    }),
  }),
};
export default validate;
