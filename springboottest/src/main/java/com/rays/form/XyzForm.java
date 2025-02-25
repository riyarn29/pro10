package com.rays.form;

import java.util.Date;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.XyzDTO;

public class XyzForm extends BaseForm {
	@NotEmpty(message = "Please enter description")
	@Pattern(regexp = "^[a-zA-Z\\s]*$", message = "Only alphabets are allowed")
	private String description;


    
   @PastOrPresent(message = "addedDate must be today or in the past")
    @NotNull(message = "Please enter addedDate")
    private Date addedDate;

  
    @NotEmpty(message = "Please select level")
    private String product;

    
    @NotNull(message = "Please enter amount")
    @Min(value = 1000, message = " amount should be more than 1000")
    @Max(value = 99999999, message = " amount should have max 8 digits")
    private Integer amount;
    
   






	public String getDescription() {
		return description;
	}








	public void setDescription(String description) {
		this.description = description;
	}








	public Date getAddedDate() {
		return addedDate;
	}








	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}








	public String getProduct() {
		return product;
	}








	public void setProduct(String product) {
		this.product = product;
	}








	public Integer getAmount() {
		return amount;
	}








	public void setAmount(Integer amount) {
		this.amount = amount;
	}








	@Override
    public BaseDTO getDto() {
        XyzDTO dto = initDTO(new XyzDTO());
        dto.setDescription(description);
        dto.setAddedDate(addedDate);
        dto.setAmount(amount);
        dto.setProduct(product);
        return dto;
    }
}
