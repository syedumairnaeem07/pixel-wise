import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
    const transformations = transformationTypes[type];

    return (
        <>
            <Header
                title={transformations.title}
                subtitle={transformations.subTitle}
            />

            <TransformationForm />
        </>
    );
};
export default AddTransformationTypePage;
