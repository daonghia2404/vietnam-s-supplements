export type TParamsGetAddress = {
  cityCode: string | null;
  districtCode: string | null;
};

export type TGetAddressResponse = TAddressResponse[];

export type TAddressResponse = {
  code: string;
  name: string;
  name_with_type: string;
  slug: string;
  type: string;
  parent_code?: string;
  path?: string;
  path_with_type?: string;
};
