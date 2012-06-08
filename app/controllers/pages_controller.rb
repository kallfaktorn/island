
class PagesController < ApplicationController

  # GET /pages
  # GET /pages.json
  def index
    @pages = Page.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @pages }
    end
  end

  # GET /pages/1
  # GET /pages/1.json
  def show
    @page = find_page_by_title(params[:title])

    unless @page
      new()
      return
    end

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @page }
    end
  end

  # GET /pages/new
  # GET /pages/new.json
  def new
    @page = Page.new
    @page.id = 0

    respond_to do |format|
      format.html { render action: "new" }  #new.html.erb
      format.json { render json: @page }
    end
  end

  # GET /pages/1/edit
  def edit
    @page = Page.find(params[:id])
  end

  # POST /pages
  # POST /pages.json
  def create

	id = params[:page][:id]
	title = params[:page][:title]
	picture = params[:page][:picture]
	
	filename = picture.original_filename
	directory = 'public/uploads/users/' + title + '/'
	path = File.join(directory, filename)
	
	FileUtils.mkdir_p directory
	File.open(path, "wb") { |f| f.write(picture.read) }

	directory = '/' + directory
	
	@page = Page.create(:id=>id, :title=>title, :path=>path)
	
    respond_to do |format|
      if @page.save
        format.html { render action: "show" }
        format.json { render :json => @page.title }
      else
        format.html { render action: "show" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /pages/1
  # PUT /pages/1.json
  def update
    @page = Page.find(params[:id])

    respond_to do |format|
      if @page.update_attributes(params[:page])
        format.html { redirect_to @page, notice: 'Page was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page = Page.find(params[:id])
    @page.destroy

    respond_to do |format|
      format.html { redirect_to pages_url }
      format.json { head :no_content }
    end
  end
  
  # helper
  def find_page_by_title(title)
    for p in Page.all do
      if p.title == title
        return p
      end
    end
	return nil
  end

  def base_part_of(file_name)
    return File.basename(file_name, ".*")
  end
  
  def log(string)
    logger.info(string)
  end
  
end