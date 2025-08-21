import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronRight } from "lucide-react";

function ProductFilters({
  isFiltersOpen,
  setIsFiltersOpen,
}: {
  isFiltersOpen?: boolean;
  setIsFiltersOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full p-0 lg:pt-17">
      <button
        onClick={() => setIsFiltersOpen?.((isFiltersOpen) => !isFiltersOpen)}
        className="font-['Beatrice_Deck_Trial_Bold'] mb-5 cursor-pointer lg:cursor-default w-fit"
      >
        <div className="flex items-center gap-0.5">
          <span>Filters</span>
          <ChevronRight className="lg:hidden" size={18} />
        </div>
      </button>

      {/* Size Filter */}
      <div className="w-full pb-6 border-b border-dashed border-[#C9C9C9]">
        <h4 className="font-['Beatrice_Deck_Trial_Bold'] text-sm mb-2">Size</h4>

        <ToggleGroup className="w-full gap-1" type="multiple" variant="outline">
          <ToggleGroupItem className="border-[#A3A3A3] custom-toggle-border" value="xs">
            XS
          </ToggleGroupItem>
          <ToggleGroupItem className="border-[#A3A3A3] custom-toggle-border" value="s">
            S
          </ToggleGroupItem>
          <ToggleGroupItem className="border-[#A3A3A3] custom-toggle-border" value="m">
            M
          </ToggleGroupItem>
          <ToggleGroupItem className="border-[#A3A3A3] custom-toggle-border" value="l">
            L
          </ToggleGroupItem>
          <ToggleGroupItem className="border-[#A3A3A3] custom-toggle-border" value="xl">
            XL
          </ToggleGroupItem>
          <ToggleGroupItem className="border-[#A3A3A3] custom-toggle-border" value="2xl">
            2X
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Accordion type="multiple" className="font-['Beatrice_Deck_Trial_Bold'] text-sm">
        {/* Availability Filter */}
        <AccordionItem className="border-[#C9C9C9] border-dashed" value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent className="font-[Poppins]">
            <div className="flex items-center space-x-2 mb-6">
              <Checkbox className="border-[#A3A3A3] rounded-none" id="available" />
              <Label htmlFor="available">
                Availability <span className="text-gray-500">(450)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="border-[#A3A3A3] rounded-none" id="out-of-stock" />
              <Label htmlFor="out-of-stock">
                Out Of Stock <span className="text-gray-500">(18)</span>
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-[#C9C9C9] border-dashed" value="category">
          <AccordionTrigger className="font-medium">Category</AccordionTrigger>
          <AccordionContent>{/* Add category checkboxes here */}</AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-[#C9C9C9] border-dashed" value="colors">
          <AccordionTrigger className="font-medium">Colors</AccordionTrigger>
          <AccordionContent>{/* Add category checkboxes here */}</AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-[#C9C9C9] border-dashed" value="price">
          <AccordionTrigger className="font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            {/* You can add text inputs for min/max or just the slider */}
            <Slider className="h-10" defaultValue={[25, 75]} max={100} step={1} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-[#C9C9C9] border-dashed" value="collections">
          <AccordionTrigger className="font-medium">Collections</AccordionTrigger>
          <AccordionContent>{/* Add category checkboxes here */}</AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-[#C9C9C9] border-dashed" value="tags">
          <AccordionTrigger className="font-medium">Tags</AccordionTrigger>
          <AccordionContent>{/* Add category checkboxes here */}</AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-[#C9C9C9] border-dashed" value="ratings">
          <AccordionTrigger className="font-medium">Ratings</AccordionTrigger>
          <AccordionContent>{/* Add category checkboxes here */}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ProductFilters;
