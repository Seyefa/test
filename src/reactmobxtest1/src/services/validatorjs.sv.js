const messages = {
  accepted: 'SV: The :attribute must be accepted.',
  alpha: 'SV: The :attribute field must contain only alphabetic characters.',
  alpha_dash: 'SV: The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.',
  alpha_num: 'SV: The :attribute field must be alphanumeric.',
  between: 'SV: The :attribute field must be between :min and :max.',
  confirmed: 'SV: The :attribute confirmation does not match.',
  email: 'Fyll i en korrekt e-postadress. en: The :attribute format is invalid.',
  date: 'SV: The :attribute is not a valid date format',
  def: 'SV: The :attribute attribute has errors.',
  digits: 'SV: The :attribute must be :digits digits.',
  different: 'SV: The :attribute and :different must be different.',
  'in': 'SV: The selected :attribute is invalid.',
  integer: 'SV: The :attribute must be an integer.',
  min: {
    numeric: 'SV: The :attribute must be at least :min.',
    string: 'Fyll i minst :min tecken. en: The :attribute must be at least :min characters.'
  },
  max: {
    numeric: 'SV: The :attribute may not be greater than :max.',
    string: 'SV: The :attribute may not be greater than :max characters.'
  },
  not_in: 'SV: The selected :attribute is invalid.',
  numeric: 'SV: The :attribute must be a number.',
  required: ':attribute är obligatoriskt.',
  required_if: 'SV: The :attribute field is required when :other is :value.',
  required_unless: 'SV: The :attribute field is required when :other is not :value.',
  required_with: 'SV: The :attribute field is required when :field is not empty.',
  required_with_all: 'SV: The :attribute field is required when :fields are not empty.',
  required_without: 'SV: The :attribute field is required when :field is empty.',
  required_without_all: 'SV: The :attribute field is required when :fields are empty.',
  same: 'Fyll i samma värde en gång till. en: The :attribute and :same fields must match.',
  size: {
    numeric: 'SV: The :attribute must be :size.',
    string: 'SV: The :attribute must be :size characters.'
  },
  string: 'SV: The :attribute must be a string.',
  url: 'SV: The :attribute format is invalid.',
  regex: 'SV: The :attribute format is invalid',
  attributes: {}
};

export default messages;